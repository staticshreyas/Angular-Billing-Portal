import { Routes} from '@angular/router';
import { OrdersComponent } from '../orders/orders.component';
import { OrderComponent } from '../orders/order/order.component';

export const routes: Routes = [
    { path: '', redirectTo: 'order', pathMatch: 'full' },
    { path: 'orders', component: OrdersComponent },
    {
      path: 'order', children: [
        { path: '', component: OrderComponent },
        { path: 'edit/:id', component: OrderComponent }
      ]
    }
  ];