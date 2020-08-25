import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styles: []
})
export class OrdersComponent implements OnInit {
  orderList;
  errMsg =false;
  constructor(private service: OrderService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.refreshList();
  }
  refreshList() {
    this.service.getOrderList().subscribe(res => {
      this.orderList = res;
      this.errMsg = this.orderList.length == 0 ? true : false;
    });
  }

  openForEdit(orderID: number) {
    this.router.navigate(['/order/edit/' + orderID]);
  }

  onOrderDelete(orderID: number) {
    if (confirm("Are you sure to delete this record?")) {

      this.service.deleteOrder(orderID).subscribe(res => {
        this.refreshList();
        this.toastr.warning("Deleted Successfully!", "Restaurent App");
      });

    }
  }

}
