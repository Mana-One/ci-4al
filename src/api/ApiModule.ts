import { Module } from "@nestjs/common";
import { UsersModule } from "../modules/users/UsersModule";

@Module({
    imports: [UsersModule]
})
export class ApiModule {}