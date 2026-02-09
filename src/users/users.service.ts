import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user.entity';

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async onModuleInit() {
    await this.seedUsers();
  }

  private async seedUsers() {
    const count = await this.usersRepository.count();
    if (count > 0) {
      return;
    }

    const user1 = this.usersRepository.create({
      name: 'Juan Pérez',
      email: 'juan.perez@example.com',
      Estado: true,
    });

    const user2 = this.usersRepository.create({
      name: 'María García',
      email: 'maria.garcia@example.com',
      Estado: true,
    });

    await this.usersRepository.save([user1, user2]);
  }
}
