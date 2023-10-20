import { Navigate, Route, Routes } from "react-router-dom";
import Insert from "../../DataArea/AddShop/AddShop";
import List from "../../DataArea/ListShops/ListShops";
import Home from "../../HomeArea/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";
import AddShop from "../../DataArea/AddShop/AddShop";
import ListShops from "../../DataArea/ListShops/ListShops";

function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/shops" element={<ListShops/>} />
            <Route path="/add-shop" element={<AddShop />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default Routing;
