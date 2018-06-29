import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { HeaderComponent } from './header/header.component';
import { TileDetailComponent } from './tile-detail/tile-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    HeaderComponent,
    TileDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
