import axios from "axios";
import ShopModel from "../Models/ShopModel";
import appConfig from "../Utils/AppConfig";
import CategoryModel from "../Models/CategoryModel";
import notifyService from "./NotifyService";

class DataService {
    public async getAllShops():Promise<ShopModel[]> {
        const response = await axios.get<ShopModel[]>(appConfig.shopsUrl);
        const shops = response.data;
        return shops;

        
    }

    public async addShop(shop: ShopModel): Promise<void>{
        await axios.post(appConfig.addShopUrl, shop);
    }

    public async getAllShopsCategories(): Promise<CategoryModel[]>{
        const response = await axios.get(appConfig.categoriesUrl);
        const shopsCategories = response.data;
        return shopsCategories;
    }
    catch(err: any){
        notifyService.error(err);
    }

    public async deleteShop(shopId: number): Promise<void>{
        await axios.delete(appConfig.shopsUrl + shopId);
    }


}

const dataService = new DataService();

export default dataService;
