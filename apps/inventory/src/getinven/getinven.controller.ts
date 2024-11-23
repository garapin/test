import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GetInvenService } from "./getinven.service";

@swagger.ApiTags("getInvens")
@common.Controller("getInvens")
export class GetInvenController {
  constructor(protected readonly service: GetInvenService) {}
}
