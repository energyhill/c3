import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFormComponent } from './pages/data-form/data-form.component';
import { DataViewComponent } from './pages/data-view/data-view.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { DataChartComponent } from './components/data-chart/data-chart.component';
import { PageHeaderComponent } from './core/page-header/page-header.component';
import { PageFooterComponent } from './core/page-footer/page-footer.component';
import { HelpComponent } from './pages/help/help.component';
import { AboutComponent } from './pages/about/about.component';
import { IntroComponent } from './components/intro/intro.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { DataViewerComponent } from './pages/data-viewer/data-viewer.component';

import {DataServiceService} from './services/data-service.service'

@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent,
    DataViewComponent,
    DataGridComponent,
    DataChartComponent,
    PageHeaderComponent,
    PageFooterComponent,
    HelpComponent,
    AboutComponent,
    IntroComponent,
    WelcomeComponent,
    DataViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
