import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userAlreadExist = this.usersRepository.findByEmail(email);

    if (userAlreadExist) throw new Error("User alread exists!");

    const user = this.usersRepository.create({ name, email });

    return user;
  }
}

export { CreateUserUseCase };
