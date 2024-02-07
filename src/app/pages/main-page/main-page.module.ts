import { NgModule } from "@angular/core";
import { MainPageComponent } from "./main-page.component";
import { SharedModule } from "../../shared";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ],
})
export class MainPageModule { }
