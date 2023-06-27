// export type Product={
//   id: number,
//   title: string,
//   price: number,
//   description: string,
//   images:Image,
//   creationAt: string,
//   updatedAt: string,
//   category:{
//     id: number,
//     name: string,
//     image: string,
//     creationAt: string,
//     updatedAt: string,
//   }
// }

// export type Image = {
//   [0]: string,
//   [1]: string,
//   [2]:string,
// }

export type Item = {
// startsWith(userInput: string): unknown;
id:number,
brand: string,
name: string,
price: string,
price_sign:string,
currency:string,
image_link: string,
description: string,
product_type:string,
api_featured_image:string,
quantity: number,
product_category:string,
}