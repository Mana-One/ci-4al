import { Module } from "@nestjs/common";
import { LocalityModule } from "../modules/locality/LocalityModule";
import { UsersModule } from "../modules/users/UsersModule";

@Module({
    imports: [LocalityModule, UsersModule]
})
export class ApiModule {}