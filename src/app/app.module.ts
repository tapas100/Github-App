import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoaderService } from './services/loader.service';
import { LoaderComponent } from './components/loader/loader.component';
import { UserModule } from './scenes/user/user.module';
import { RouterModule } from '@angular/router';
import { HttpService } from './services/http.service';
import { HttpcacheService } from './services/httpcache.service';
import { CacheInterceptor } from './interceptors/cache.interceptor';
import { MaterialModule } from './material.module';
@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([])
  ],
  providers: [LoaderService,HttpService
  ],
  // HttpcacheService,
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: CacheInterceptor,
  //     multi: true
  // }
  bootstrap: [AppComponent]
})
export class AppModule { }
