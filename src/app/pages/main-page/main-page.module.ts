import { NgModule } from "@angular/core";
import { MainPageComponent } from "./main-page.component";
import { SharedModule } from "../../shared";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    MainPageComponent
  ],
  exports: [
  ],
})
export class MainPageModule { }
