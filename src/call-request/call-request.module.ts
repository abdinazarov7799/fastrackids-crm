import { Module } from '@nestjs/common';
import { CallRequestService } from './call-request.service';
import { CallRequestController } from './call-request.controller';

@Module({
  providers: [CallRequestService],
  controllers: [CallRequestController]
})
export class CallRequestModule {}
