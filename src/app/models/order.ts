import { ShoppingCart } from './shopping-cart';
export class Order {
    datePlaced: any;
    items:any[];
    total:number;
    key?:string;
 
  



    constructor(public userId:string, 
        public shipping:any,
        shoppingCart:ShoppingCart,
        public totalCost:number)   {
        this.datePlaced = new Date().getDate();
    this.totalCost;
        this.items = shoppingCart.items.map(i=> {
            return {
                product: {
                    title: i.title,
                    imageUrl: i.imageUrl,
                    price:i.price,
                    
                },
                quantity: i.quantity,
                
                totalPrice: i.price
            };
        });

     
    }



}