import dal from "../2-utils/dal";
import { OkPacket } from "mysql";
import CategoryModel from "../3-models/category-model";
import ShopModel from "../3-models/shop-model";
import { ResourceNotFoundError } from "../3-models/client-errors";

async function getAllCategories(): Promise <CategoryModel[]> {
    const sql = "SELECT * FROM categories";
    const categories = await dal.execute(sql);
    return categories;
}

async function getAllShops(): Promise <ShopModel[]> {
    const sql = `SELECT
    categories.categoryName,
     shops.shopId,
     shops.shopName ,
     shops.address,
     categories.categoryId 
     from shops
     inner join
     categories on categories.categoryId = shops.categoryId`;

     const shops = await dal.execute(sql);
     return shops;
}

async function addShop(shop: ShopModel): Promise<ShopModel>{
    shop.validate();
    const sql = "INSERT INTO shops VALUES(DEFAULT, ?,?,?)";
    const info: OkPacket = await dal.execute(sql,[shop.shopName, shop.categoryId, shop.address]);
    shop.shopId = info.insertId;
    return shop;

}

async function deleteShop(shopId: number): Promise<void>{
    const sql = "DELETE FROM shops where shopId = ?";
    const info: OkPacket = await dal.execute(sql,[shopId]);
    if(info.affectedRows === 0) throw new ResourceNotFoundError(shopId);

}


export default {
    getAllCategories,
    getAllShops,
    addShop,
    deleteShop
};

