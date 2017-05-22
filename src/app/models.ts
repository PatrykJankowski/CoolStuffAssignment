export class Product {

  constructor(
    public id: number,
    public name: string,
    public imageUrl: string,
    public price: number) {
  }

}


export class Cart {

  constructor(
    public id: number,
    public total: number,
    public currency: string,
    public products: any[]
  ) {}

}
