import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserDetailsModule } from './ui/user-details/user-details.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UserDetailsModule, // just for the demo we import it directly in app module
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
