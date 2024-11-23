import { Module } from "@nestjs/common";
import { GetInvenService } from "./getinven.service";
import { GetInvenController } from "./getinven.controller";
import { GetInvenResolver } from "./getinven.resolver";

@Module({
  controllers: [GetInvenController],
  providers: [GetInvenService, GetInvenResolver],
  exports: [GetInvenService],
})
export class GetInvenModule {}
