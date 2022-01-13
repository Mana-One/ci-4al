import { Module } from "@nestjs/common";
import { LocalityController } from "./LocalityController";

@Module({
    controllers: [LocalityController]
})
export class LocalityModule {}