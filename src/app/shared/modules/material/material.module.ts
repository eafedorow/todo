import { NgModule } from "@angular/core";

import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule} from "@angular/material/checkbox";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTabsModule } from "@angular/material/tabs";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  exports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class MaterialModule { }
