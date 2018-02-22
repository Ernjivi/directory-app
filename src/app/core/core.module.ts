import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AngularFireAuthModule } from "angularfire2/auth";

import { AuthService } from './auth.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    AngularFireAuthModule,
  ],
  exports: [
    BrowserAnimationsModule,
  ],
  declarations: [],
  providers: [AuthService]
})
export class CoreModule { }
