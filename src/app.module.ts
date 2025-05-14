import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { StudentModule } from './student/student.module';
import { AttendanceModule } from './attendance/attendance.module';
import { TeacherLogModule } from './teacher-log/teacher-log.module';
import { PaymentModule } from './payment/payment.module';
import { ExpenseModule } from './expense/expense.module';
import { CallRequestModule } from './call-request/call-request.module';
import { TaskModule } from './task/task.module';
import { ReportModule } from './report/report.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { RolesGuard } from './auth/roles.guard';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST', { infer: true }),
        port: configService.get<number>('DATABASE_PORT', { infer: true }),
        username: configService.get<string>('DATABASE_USER', { infer: true }),
        password: configService.get<string>('DATABASE_PASSWORD', { infer: true }),
        database: configService.get<string>('DATABASE_NAME', { infer: true }),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    AuthModule,
    UserModule,
    StudentModule,
    AttendanceModule,
    TeacherLogModule,
    PaymentModule,
    ExpenseModule,
    CallRequestModule,
    TaskModule,
    ReportModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
