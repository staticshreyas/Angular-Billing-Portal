import {OrderItem} from './order-item.model'

export class Order {
  orderID: number;
  orderNo: string;
  customerID: number;
  pMethod: string;
  gTotal: number;
  deletedOrderItemIDs: string;
  OrderItem: OrderItem[];
}
