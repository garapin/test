import * as graphql from "@nestjs/graphql";
import { GetInvenService } from "./getinven.service";

export class GetInvenResolver {
  constructor(protected readonly service: GetInvenService) {}
}
