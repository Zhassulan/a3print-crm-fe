import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../../page-not-found/page-not-found.component';
import { EmployeesListComponent } from 'src/app/employees/employees-list/employees-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'payments',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: EmployeesListComponent
  },
  {
    path: 'payments',
    component: EmployeesListComponent,
    data: {
      component: 'PaymentsComponent',
      breadcrumb: 'Платежи'
    }
  },
  {
    path: 'employees',
    component: EmployeesListComponent,
    data: {
      component: 'EmployeesListComponent',
      breadcrumb: 'Сотрудники'
    }
  },
  /* {
     path: 'payments-v2',
     component: PaymentsTableV2Component,
   },*/
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class RoutesModule {
}

