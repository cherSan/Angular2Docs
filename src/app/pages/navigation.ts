import {Routes} from "@angular/router";
import {InitRouter} from "./init/init.component";
import {WrapperRoute} from "./wrapper/wrapper.component";
/**
 * Created by st13133 on 12/5/2016.
 */
export const navigation: Routes = [
  InitRouter,
  ...WrapperRoute
];
