import {useState} from 'react';

const Restaurant = () => {

    const [restaurants, setRestaurants] = useState([
        {name:"Haru Plus", type:"Buffet", id:1},
        {name:"Bank", type:"Buffet", id:2},
        {name:"Old Boy", type:"Annos", id:3},
        {name:"Skifferi", type:"Annos", id:4},
        {name:"K21", type:"Buffet", id:5},
        {name:"Rioni", type:"Annos", id:6},
    ]);


    return ( <></> );
}
 
export default Restaurant;