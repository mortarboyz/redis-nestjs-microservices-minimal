import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.REDIS,
    options: {
      url: 'redis://192.168.0.107:6379',
    },
  });
  await app.startAllMicroservices();
  await app.listen(5000);
}
bootstrap();
