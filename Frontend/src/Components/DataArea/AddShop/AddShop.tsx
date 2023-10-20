import { useNavigate } from "react-router-dom";
import "./AddShop.css";
import { useForm } from "react-hook-form";
import ShopModel from "../../../Models/ShopModel";
import { useEffect, useState } from "react";
import dataService from "../../../Services/DataService";
import notifyService from "../../../Services/NotifyService";
import CategoryModel from "../../../Models/CategoryModel";

function Insert(): JSX.Element {

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<ShopModel>();

    // const [shops, setShops] = useState<ShopModel[]>([]);

    // useEffect(() => {
    //     dataService.getAllShops()
    //         .then(backendShops => setShops(backendShops))
    //         .catch(err => notifyService.error(err));
    // }, []);

    const [categories, setCategories] = useState<CategoryModel[]>([]);

    useEffect(() => {
        dataService.getAllShopsCategories()
            .then(backendShopsCategories => setCategories(backendShopsCategories))
            .catch(err => notifyService.error(err));
    }, []);

    async function send(shop: ShopModel) {
        try {
            await dataService.addShop(shop);
            notifyService.success("Shop has been added successfully");
            navigate("/shops")
        }
        catch(err: any){
            notifyService.error(err);
        }
        
    }


    return (
        <div className="Insert">
            <h2>Add shop:</h2>
            <form onSubmit={handleSubmit(send)}>

                <label>Shop Name:</label>
                <input type="text" required {...register("shopName")}></input>

                <label>Category:</label>
                <select required defaultValue="" {...register("categoryId")}>

                <option disabled value="">Pick</option>
                {categories.map(shopsCategories => <option key = {shopsCategories.categoryId} value={shopsCategories.categoryId}>{shopsCategories.categoryName}</option>)}
                </select>
                
                <label>Address:</label>
                <input type="text" required {...register("address")}></input>

                      
                <br /><br />
                <button>Add</button>




            </form>
        </div>
    );
}

export default Insert;
