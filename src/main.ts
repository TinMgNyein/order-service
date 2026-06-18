import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = Number(process.env.PORT || 3001);
  const host = process.env.HOST || process.env.HOSTNAME || "0.0.0.0";

  app.enableCors({
    origin: "*",
    methods: "GET,POST,OPTIONS",
    allowedHeaders: "Content-Type",
  });

  await app.listen(port, host);
  console.log(`order-service listening on http://${host}:${port}`);
}

bootstrap();
