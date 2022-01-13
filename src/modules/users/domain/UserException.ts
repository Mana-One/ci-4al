export class UserException extends Error {
    constructor(message: string) {
        super(message);
        this.name = new.target.name;
        Object.setPrototypeOf(this, new.target.prototype);
        Error.captureStackTrace(this);
    }

    static fromMessages(messages: string[]): UserException {
        return new UserException(messages.join("\n"));
    }
}