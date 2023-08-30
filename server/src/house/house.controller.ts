import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HouseService } from "./house.service";
import { HouseControllerBase } from "./base/house.controller.base";

@swagger.ApiTags("houses")
@common.Controller("houses")
export class HouseController extends HouseControllerBase {
  constructor(
    protected readonly service: HouseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
