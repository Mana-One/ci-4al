import { User } from "./User";

export interface Users {
    nextIdentity(): Promise<number>;
    getAll(): Promise<User[]>;
    save(user: User): Promise<void>;
}