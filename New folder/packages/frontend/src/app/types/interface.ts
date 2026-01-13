export interface img{
    defaultHost:string;
    endpoint:string;
    id:string;
    name:string;
  }

  export interface product {
  color:string;
  image: img;
  imageText:string;
  imageUrl:string;
  discount:string;
  price:string;
  productID:string;
  category:string;
  slug:string;
  title:string;
}