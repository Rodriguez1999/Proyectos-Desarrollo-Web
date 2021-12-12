export interface Company {
  _id: string;
  name: string,
  phone: string;
  address: string;
  lat: number;
  long: number;
  email: string;
  description: string;
  reviews: [];
  category: string;
  imgProfile: string;
  imgBanner: string;
}
