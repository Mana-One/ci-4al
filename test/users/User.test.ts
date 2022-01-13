import { isLeft, isRight } from "fp-ts/lib/Either";
import { User } from "../../src/modules/users/domain/User"
import { UserException } from "../../src/modules/users/domain/UserException";

describe("User", () => {
    describe("static create", () => {
        it("should return right", () => {
            const user = User.create("hello", "world");
            expect(isRight(user)).toBe(true);
        })

        it("should return a User instance", () => {
            const user = User.create("hello", "world");
            expect.hasAssertions();
            if (isRight(user)) {
                expect(user.right).toBeInstanceOf(User);
            }
        })

        it("should return a UserException when the firstname is empty", () => {
            const user = User.create("", "world");
            expect.hasAssertions();
            if (isLeft(user)) {
                expect(user.left).toBeInstanceOf(UserException);
                expect(user.left.message).toBe("Invalid firstname.");
            }
        })

        it("should return a UserException when the lastname is empty", () => {
            const user = User.create("hello", "");
            expect.hasAssertions();
            if (isLeft(user)) {
                expect(user.left).toBeInstanceOf(UserException);
                expect(user.left.message).toBe("Invalid lastname.");
            }
        })

        it("should cumulate errors", () => {
            const user = User.create("", "");
            expect.hasAssertions();
            if (isLeft(user)) {
                expect(user.left).toBeInstanceOf(UserException);
                expect(user.left.message).toBe("Invalid firstname.\nInvalid lastname.");
            }
        })
    })
})