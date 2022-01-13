import { NestFactory } from "@nestjs/core";
import { ApiModule } from "./ApiModule";


async function main() {
    const app = await NestFactory.create(ApiModule);
    const port = process.env.PORT || 3000
    app.listen(port, () => console.log("Listening on " + port));
}

main().catch(console.error);