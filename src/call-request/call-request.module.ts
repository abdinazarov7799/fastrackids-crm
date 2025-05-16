import { Module } from '@nestjs/common';
import { CallRequestService } from './call-request.service';
import { CallRequestController } from './call-request.controller';
import { CallRequest } from "./entities/call-request.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([CallRequest])],
  providers: [CallRequestService],
  controllers: [CallRequestController]
})
export class CallRequestModule {}
