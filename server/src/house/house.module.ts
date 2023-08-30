import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HouseModuleBase } from "./base/house.module.base";
import { HouseService } from "./house.service";
import { HouseController } from "./house.controller";
import { HouseResolver } from "./house.resolver";

@Module({
  imports: [HouseModuleBase, forwardRef(() => AuthModule)],
  controllers: [HouseController],
  providers: [HouseService, HouseResolver],
  exports: [HouseService],
})
export class HouseModule {}
