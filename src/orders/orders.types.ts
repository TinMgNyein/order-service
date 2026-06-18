export interface OrderItem {
  productId: string | number;
  name: string;
  price: number;
  qty: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  status: "confirmed" | "failed";
  createdAt: string;
}

export interface CreateOrderRequest {
  items?: OrderItem[];
}

export interface CreateOrderResult {
  order?: Order;
  error?: string;
}
