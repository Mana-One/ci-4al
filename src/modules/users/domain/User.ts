import { sequenceT } from "fp-ts/lib/Apply";
import { Either, getApplicativeValidation, left, map, mapLeft, right } from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/function";
import { getSemigroup, NonEmptyArray } from "fp-ts/lib/NonEmptyArray";
import { UserException } from "./UserException";

export class User {
    private constructor(
        readonly firstname: string,
        readonly lastname: string
    ) {}

    static create(firstname: string, lastname: string): Either<UserException, User> {
        const ap = getApplicativeValidation(getSemigroup<string>());
        const checkStr = (err: string) => (str: string): Either<NonEmptyArray<string>, string> => {
            return str.length === 0 ? left([err]) : right(str);
        }

        return pipe(
            sequenceT(ap)(
                checkStr("Invalid firstname.")(firstname),
                checkStr("Invalid lastname.")(lastname)
            ),
            map(args => new User(...args)),
            mapLeft(UserException.fromMessages)
        );
    }
}