import React from "react";
import ReactDOM from "react-dom/client";



const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYURc0goaP1Ip5FqEzK1mM9vpONE9hoNF5fA&s"/>
            </div>
 
            <div className="nav-items">
                <ul>
                    <li> Home </li>
                    <li> About us  </li>
                    <li> Contact us </li>
                    <li> Cart </li>
                </ul>

            </div>

        </div>
    )
}


const RestaurantCard = () => {
    return (
        <div className="res-card">
            <img className="res-image"
                 alt="res-logo"
                 src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_769469.JPG"/>
            <h3> Burger King </h3>
            <h6> Burgers, American </h6>
            <h6> 4.4 Stars</h6>
            <h6> 30 minutes</h6>

        </div>
    )
}


const Body = () => {
    return (
    <div className="body">
        <div className="search"> Search </div>
        <div className="res-container" >
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            

        </div>

    </div>
    )
}




const AppLayout = () => {
    return (
        <div className="App">
            <Header />
            <Body />
        
        </div>
    )
}


const rootdom = ReactDOM.createRoot(document.getElementById("root"));
rootdom.render(<AppLayout />);