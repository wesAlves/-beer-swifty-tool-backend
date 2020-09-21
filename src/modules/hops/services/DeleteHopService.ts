import { getCustomRepository } from "typeorm";
import HopsRepository from "@modules/hops/repositories/HopsRepository";

class DeleteHopService {
  public async execute(id: string): Promise<void> {
    const hopsRepository = getCustomRepository(HopsRepository);

    await hopsRepository.delete({ id: `${id}` });
  }
}

export default DeleteHopService;
