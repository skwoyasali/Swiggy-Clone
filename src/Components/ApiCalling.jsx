import { useEffect, useState } from "react";
import axios from "axios";


function Apicalling(){
    const [allRestaurantArr, setAllRestaurantArr] = useState([])
    
    useEffect(()=>{
    async function calling(){ 
        const API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        let res = await axios.get(API);
        setAllRestaurantArr(res.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        console.log(res.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }
    calling();
    })

}

export default Apicalling;