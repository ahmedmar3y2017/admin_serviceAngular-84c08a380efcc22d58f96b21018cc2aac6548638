import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';
import { AuthGuard } from './shared/Services/auth.guard';
import {Routes} from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
import { ChangePasswordComponent } from './pages/user/change-password/change-password.component';
import { OffersComponent } from './pages/offers/offers.component';

export const AppRoutes: Routes = [

  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path:'',
        redirectTo: 'authentication/login',
        pathMatch:'full',


      } ,
      {
        path:'authentication',
        loadChildren: './pages/authentication/authentication.module#AuthenticationModule',


      } ,

    ]
  } ,
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        canActivate:[AuthGuard],
        
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        // canActivate:[AuthGuard],
        loadChildren: './pages/dashboard/dashboard-default/dashboard-default.module#DashboardDefaultModule'
      }, {
        path: 'basic',
        // canActivate:[AuthGuard],
        loadChildren: './pages/ui-elements/basic/basic.module#BasicModule'
      }, {
        path: 'notifications',
        // canActivate:[AuthGuard],
         loadChildren: './pages/ui-elements/advance/notifications/notifications.module#NotificationsModule'
      }, {
        path: 'bootstrap-table',
        // canActivate:[AuthGuard],
        loadChildren: './pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.module#BasicBootstrapModule',
      }, {
        path: 'map',
        // canActivate:[AuthGuard],
        loadChildren: './pages/map/google-map/google-map.module#GoogleMapModule',
      }, {
        path: 'user',
        // canActivate:[AuthGuard],
        loadChildren: './pages/user/profile/profile.module#ProfileModule'
      },
      {
        path: 'products',
        // canActivate:[AuthGuard],
        component: ProductsComponent,

      },
      {
        path: 'orders',
        // canActivate:[AuthGuard],
        component: OrdersComponent,

      },
      {
        path: 'changePassword',
        // canActivate:[AuthGuard],
        component: ChangePasswordComponent,

      } ,
      {
        path: 'customers',
        // canActivate:[AuthGuard],
        component: CustomersComponent,

      } ,
      {
        path: 'offers',
        // canActivate:[AuthGuard],
        component: OffersComponent,

      } ,
    ]
  },
  { path: '**', component: PageNotFoundComponent }
  
];
