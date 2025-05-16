import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { getRepositoryToken } from "@nestjs/typeorm";
import { User } from "./user/entities/user.entity";
import * as bcrypt from 'bcrypt';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const userRepo = app.get(getRepositoryToken(User));
  const superAdminExists = await userRepo.findOne({ where: { role: 'super_admin' } });

  if (!superAdminExists) {
    const superAdmin = userRepo.create({
      firstName: 'Admin',
      lastName: 'Admin',
      phone: '+998992227799',
      username: 'admin',
      password: await bcrypt.hash('admin123', 10),
      role: 'super_admin',
    });
    await userRepo.save(superAdmin);
    console.log('[INIT] Default super_admin created: admin / admin123');
  }

  const config = new DocumentBuilder()
    .setTitle('Fastrackids CRM API')
    .setDescription('Backend documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
}
bootstrap();
