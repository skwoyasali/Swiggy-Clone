import React from "react";
import restaurantcart from "./restaurantcart";
import Restaurantcart from "./restaurantcart";
import ApiCalling from "./ApiCalling"
function Body(){
   let resArr = ApiCalling();
   console.log("API CAlling")

    return(
        <div>
            <h1 className="font-bold text-xl m-6">Restaurant in Durgapur</h1>
            <button className="border rounded w-1/12 ml-8 cursor-pointer">Rating+</button>
            <div className="flex flex-wrap w-10/12 m-auto">
            <Restaurantcart />
            <Restaurantcart />
            <Restaurantcart />
            <Restaurantcart />
            <Restaurantcart />
            <Restaurantcart />
            <Restaurantcart />
            <Restaurantcart />
            <Restaurantcart />
            <Restaurantcart />
            </div>
            
        </div>
    )
}

export default Body;