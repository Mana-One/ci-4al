import { Module } from "@nestjs/common";
import { USERS_REPO } from "./constants";
import { UserController } from "./exposition/UserController";
import { InMemoryUsers } from "./infrastructure/InMemoryUsers";

@Module({
    providers: [{
        provide: USERS_REPO,
        useClass: InMemoryUsers
    }],
    controllers: [UserController]
})
export class UsersModule {}