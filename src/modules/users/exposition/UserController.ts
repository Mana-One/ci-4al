import { Body, Controller, Get, Inject, Post, UseFilters } from "@nestjs/common";
import { isLeft } from "fp-ts/lib/Either";
import { USERS_REPO } from "../constants";
import { User } from "../domain/User";
import { Users } from "../domain/Users";
import { UserCreateRequest } from "./UserCreateRequest";
import { UserExceptionFilter } from "./UserExceptionFilter";

@Controller("users")
@UseFilters(UserExceptionFilter)
export class UserController {
    constructor(@Inject(USERS_REPO) private readonly users: Users) {}

    @Post()
    async create(@Body() data: UserCreateRequest) {
        const id = await this.users.nextIdentity();
        const user = User.create(id, data.firstname, data.lastname);
        if (isLeft(user)) {
            throw user.left;
        }
        this.users.save(user.right);
    }

    @Get()
    async get() {
        return this.users.getAll();
    }
}