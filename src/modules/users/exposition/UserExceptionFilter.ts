import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";
import { UserException } from "../domain/UserException";

@Catch(UserException)
export class UserExceptionFilter implements ExceptionFilter<UserException> {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}
    
    catch(exception: UserException, host: ArgumentsHost) {
        const { httpAdapter } = this.httpAdapterHost;
        const response = host.switchToHttp().getResponse();
        httpAdapter.reply(
            response, 
            { message: exception.message },
            HttpStatus.BAD_REQUEST
        )
    }
}