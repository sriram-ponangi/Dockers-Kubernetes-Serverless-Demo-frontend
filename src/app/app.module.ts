import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { SpringbootComponent } from './springboot/springboot.component';
import { ConfigService } from './services/config.service';

export function init_app(configService: ConfigService ) {
  return () => configService.loadConfigurationData();
}

@NgModule({
  declarations: [
    AppComponent,
    NodejsComponent,
    SpringbootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ConfigService,
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [ConfigService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
