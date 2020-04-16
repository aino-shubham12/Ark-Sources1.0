import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicationGridComponent } from './publication-grid/publication-grid.component';
import { SourcesGridComponent } from './sources-grid/sources-grid.component';
import { EnterpriseGridModule } from '@ainosoft/appops-core-components/components/enterprise-grid/dist/enterprise-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleSet } from 'src/common/material-module';
import { HttpClientModule } from '@angular/common/http';
import { TabsComponent } from './tabs/tabs.component';
 
@NgModule({
  declarations: [
    AppComponent,
    PublicationGridComponent,
    SourcesGridComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EnterpriseGridModule,
    BrowserAnimationsModule,
    MaterialModuleSet,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
