import Joi from "joi";
import { ValidationError } from "./client-errors";

class ShopModel{
    public shopId: number;
    public shopName: number;
    public categoryId: number;
    public address: string;
    public categoryName: string;

    public constructor (shop: ShopModel){
        this.shopName = shop.shopName;
        this.categoryId = shop.categoryId;
        this.address = shop.address;
    }

    private static validationSchema = Joi.object({
        shopId: Joi.number().optional().positive().integer(),
        shopName: Joi.string().required().max(40),
        categoryId: Joi.number().required().positive().integer(),
        address: Joi.string().required().max(35)
    });

    public validate(): void{
        const result = ShopModel.validationSchema.validate(this);
        if(result.error?.message) throw new ValidationError(result.error.message);
    }
}

export default ShopModel;

