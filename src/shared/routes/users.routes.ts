import { response, Router } from "express";
import { getCustomRepository } from "typeorm";

import CreateUserService from "../../modules/users/services/CreateUser";
import UserRepository from "../../modules/users/reposiotories/UsersRepository";

const userRoutes = Router();

userRoutes.post("/", async (request, response) => {
  const { email, password, user_name, avatar_url, shop } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    email,
    password,
    user_name,
    avatar_url,
    shop,
  });

  return response.json(user);
});

userRoutes.get("/", async (request, reponse) => {
  const usersRepository = getCustomRepository(UserRepository);

  const users = await usersRepository.find();

  return reponse.json(users);
});

export default userRoutes;
