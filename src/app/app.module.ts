import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from './app.component';
import { RoutesModule } from './navbar/routes/routes.module';

import { LayoutModule } from '@angular/cdk/layout';
import localeRu from '@angular/common/locales/ru';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { MaterialsModule } from './materials/materials.module';
import { MyDateAdapter } from './my-date-adapter';
import {MenuToolbarComponent} from './navbar/menu-toolbar.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    EditEmployeeComponent,
    MenuToolbarComponent,
    FileUploadComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RoutesModule,
    FlexLayoutModule,
    LayoutModule,
    MaterialsModule
  ],
  providers: [
    CookieService,
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
    { provide: LOCALE_ID, useValue: 'ru-RU' },
    { provide: DateAdapter, useClass: MyDateAdapter },
    Title
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
