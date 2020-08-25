import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { OrderItem } from 'src/app/shared/order-item.model';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/shared/item.model';
import { OrderService } from 'src/app/services/order.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styles: []
})
export class OrderItemsComponent implements OnInit {
  formData: OrderItem;
  itemList: Item[];
  isValid: boolean = true;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<OrderItemsComponent>,
    private itemService: ItemService,
    private orderService: OrderService) {

  }

  ngOnInit() {
    this.itemService.getItemList().subscribe(res => { this.itemList = res as Item[] });
    if (this.data.orderItemIndex == null) {
      this.formData = {
        orderItemID: null,
        orderID: this.data.orderID,
        itemID: 0,
        itemName: '',
        price: 0,
        quantity: 0,
        total: 0
      };
    }
    else {
      this.formData = Object.assign({}, this.orderService.orderItems[this.data.orderItemIndex]);

    }

  }

  updatePrice(ctrl) {
    if (ctrl.selectedIndex == 0) {
      this.formData.price = 0;
      this.formData.itemName = '';
    } else {
      this.formData.price = this.itemList[ctrl.selectedIndex - 1].price;
      this.formData.itemName = this.itemList[ctrl.selectedIndex - 1].Name;

    }
    this.updateTotal();
  }

  updateTotal() {
    this.formData.total = parseFloat((this.formData.quantity * this.formData.price).toFixed(2));
    this.formData.total=this.formData.total+ this.formData.total*0.1
  }

  onSubmit(form: NgForm) {
    if (this.validateForm(form.value)) {
      if (this.data.orderItemIndex == null) {
        this.orderService.orderItems.push(form.value);
      }else{
        this.orderService.orderItems[this.data.orderItemIndex] = form.value;
      }
      this.dialogRef.close();
    }
  }

  validateForm(formData: OrderItem) {
    this.isValid = true;
    if (formData.itemID == 0) {
      this.isValid = false;
    } else if (formData.quantity == 0) {
      this.isValid = false;
    }
    return this.isValid;
  }
}
