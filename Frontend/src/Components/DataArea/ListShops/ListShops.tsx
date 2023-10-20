import { useEffect, useState } from "react";
import "./ListShops.css";
import ShopModel from "../../../Models/ShopModel";
import dataService from "../../../Services/DataService";
import notifyService from "../../../Services/NotifyService";
import ShopCard from "../ShopCard/ShopCard";
import { log } from "console";

function List(): JSX.Element {

    const [shops, setShops] = useState<ShopModel[]>([]);

    // useEffect(() => {
    //     dataService.getAllShops()
    //         .then(dbShops => setShops(dbShops))
    //         .catch(err => notifyService.error(err));
    // }, [])  

    useEffect(() => {
        dataService.getAllShops()
            .then(dbShops => {
                console.log(dbShops); // Log the data to see its structure
                setShops(dbShops);
            })
            .catch(err => notifyService.error(err));
    }, []);

    async function deleteMe(shopId: number): Promise<void> {
        try {
            const confrim = window.confirm("are you sure you want to delete this shop?");
            if (!confrim) return;
            await dataService.deleteShop(shopId);
            setShops(shops.filter(shops => shops.shopId !== shopId));
            notifyService.success("Shop has been deleted");

        }

        catch (err: any) {
            notifyService.error(err);
        }


    }



    return (
        <div className="List">
            <h2>Our Shops:</h2>
            {shops.map(shop => <ShopCard key={shop.shopId} shop={shop} deleteMe={deleteMe} />)}


        </div>
    );
}

export default List;
