import { getRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import authConfig from "@config/auth";
import User from "@modules/users/infra/typeorm/entities/User";
import AppError from "../../../errors/AppError";

interface IRequest {
	email: string;
	password: string;
}

interface IResponse {
	user: User;
	token: string;
}

class AuthenticateUserService {
	public async execute({ email, password }: IRequest): Promise<IResponse> {
		const userRepository = getRepository(User);

		const user = await userRepository.findOne({ where: { email } });

		if (!user) {
			throw new AppError("Credencias inválidas", 401);
		}
		const passwordMatched = await compare(password, user.password);
		if (!passwordMatched) {
			throw new AppError("Credencias inválidas", 401);
		}

		const { secret, expiresIn } = authConfig.jwt;

		const token = sign({}, secret, {
			subject: user.id,
			expiresIn: expiresIn,
		});

		return { user, token };
	}
}

export default AuthenticateUserService;
