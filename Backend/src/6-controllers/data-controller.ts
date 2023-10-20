import express, { Request, Response, NextFunction } from "express";
import CategoryModel from "../3-models/category-model";
import dataService from "../5-services/data-service";
import ShopModel from "../3-models/shop-model";
import StatusCode from "../3-models/status-code";

const router = express.Router();

router.get("/categories", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const categories = await dataService.getAllCategories();
        response.json(categories);
    }
    catch(err: any) {
        next(err);
    }
});

router.get("/shops", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const shops = await dataService.getAllShops();
        response.json(shops);
    }
    catch(err: any) {
        next(err);
    }
});

router.post("/shops", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const shop = new ShopModel(request.body);
        const addedShop = await dataService.addShop(shop);
        response.status(StatusCode.Created).json(addedShop);
    }
    catch(err: any) {
        next(err);
    }
});


router.delete("/shops/:id", async(request: Request, response: Response, next: NextFunction) => {

    try{
        const shopId =+request.params.id;
        const shops = await dataService.deleteShop(shopId);
        response.json(shops);
    }
    catch (err: any) {
        next(err);
    }
});



export default router;
