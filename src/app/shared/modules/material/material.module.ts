import { NgModule } from "@angular/core";

import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  exports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    MatSelectModule,
    MatCheckboxModule
  ],
})
export class MaterialModule { }
