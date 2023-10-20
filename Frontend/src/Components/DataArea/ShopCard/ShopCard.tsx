import ShopModel from "../../../Models/ShopModel";
import "./ShopCard.css";

interface ShopCard {
    shop: ShopModel
    deleteMe: (shopId: number) => void
}



function ShopCard(props: ShopCard): JSX.Element {
    async function deleteMe() {
        props.deleteMe(props.shop.shopId);
        
    }
    return (
        <div className="ShopCard">
            <span>Shop Name: {props.shop.shopName}</span><br /><br />
            <span>Shop Category: {props.shop.categoryName}</span><br /><br />
            <span>Address: {props.shop.address}</span><br /><br />
            <hr />
            <button onClick={deleteMe}>delete❌</button>
        </div>
    );
}

export default ShopCard;
