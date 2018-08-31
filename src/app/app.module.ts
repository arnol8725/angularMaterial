import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {CdkTableModule} from '@angular/cdk/table';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'hammerjs';
//import 'web-animations-js';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DatepickerOverviewExample} from './components/datepicker-overview-example';
import {TabsTemplateLabelExample} from './components/tabs-template-label-example';
import {TableFilteringExample} from './components/table-filtering-example';
import {MenuOverviewExample} from './components/menu-overview-example';
import {carga} from './components/carga';

import {DialogOverviewExample,DialogOverviewExampleDialog} from './components/dialog-overview-example';
import {PageInicio} from './components/page-inicio';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  imports: [ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })]
})
export class DemoMaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    DatepickerOverviewExample,
    MenuOverviewExample,
    TabsTemplateLabelExample,
    TableFilteringExample,
    PageInicio,
    DialogOverviewExample,
    DialogOverviewExampleDialog,
    carga
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [DatepickerOverviewExample,MenuOverviewExample,TabsTemplateLabelExample,TableFilteringExample,PageInicio,carga],
  
  providers: [],
  bootstrap: [AppComponent,DatepickerOverviewExample,MenuOverviewExample,TabsTemplateLabelExample,TableFilteringExample,PageInicio,DialogOverviewExample,DialogOverviewExampleDialog,carga]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);