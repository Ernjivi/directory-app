import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AngularFireAuthModule } from "angularfire2/auth";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  declarations: []
})
export class CoreModule { }
