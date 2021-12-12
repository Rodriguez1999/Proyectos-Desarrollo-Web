export interface Order {
  productsId: [];
  userId: string;
  driverId: string;
  deliveryAddress: string;
  lat: number;
  long: number;
  status: number;
  statusDetail: string;
  observation: string;
  payment: boolean;
}
