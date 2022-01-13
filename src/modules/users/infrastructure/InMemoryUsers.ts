import { User } from "../domain/User";
import { Users } from "../domain/Users";

export class InMemoryUsers implements Users {
    private data: User[] = [];

    async nextIdentity(): Promise<number> {
        return this.data.length + 1;
    }
    
    async getAll(): Promise<User[]> {
        return this.data;
    }

    async save(user: User): Promise<void> {
        this.data.push(user);
    }
}