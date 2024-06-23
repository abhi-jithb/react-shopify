import {defineOneEntry} from "oneentry";
import { config } from "../config/config";
import {IProductsEntity} from "oneentry/dist/products/productsInterfaces"

const {Products, Menus} = defineOneEntry(config.baseUrl,{
    token: process.env.ONE_ENTRY_TOKEN ,
});

export async function getProducts(): Promise<IProductsEntity[]>{
    try {   
        const products:IProductsEntity[] = await Products.getProducts(); 
        console.log(products);
        return products;
    } catch(error){
        console.log(error);
        throw error;
    }
}