import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatIconModule,
  MatTableModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatListModule,
  MatTooltipModule,
  MatInputModule,
  MatTabsModule,
  MatDividerModule
} from "@angular/material";

const modules = [MatDividerModule, MatTabsModule, MatInputModule, MatTooltipModule, MatListModule, MatExpansionModule, MatFormFieldModule, MatTableModule, MatIconModule, MatMenuModule, MatToolbarModule, MatSlideToggleModule, MatMenuModule, MatButtonModule, MatCheckboxModule ];

@NgModule({
  imports: modules,
  exports: modules
})
export class materialModule { }
