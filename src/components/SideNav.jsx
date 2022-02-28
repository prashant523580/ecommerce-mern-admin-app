import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./sidenav.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import PagesIcon from '@mui/icons-material/Pages';
const Sidenav = (props) => {
    const [menuWidth,setMenuWidth] = useState(7);
    const [rotate,setRotate] = useState(0)
    const [linkText,setLinkText] = useState("none");
    // console.log(items);
    let navlinks = [
        {
            link: "home",
            icon: <HomeIcon/>,
            path: "/"
        },
        {
            link:"category",
            icon: <CategoryIcon/>,
            path:"/category"
        },
        {
            link:"product",
            icon: <ShoppingBagIcon/>    ,
            path:"/products"
        },
        {
            link:"pages",
            icon:<PagesIcon/>,
            path: "/pages"
        },{
            link:"order",
            icon:<FactCheckIcon/>,
            path: "/orders"
        }
    ];
    const toggleMenu = ()  => {
        if(menuWidth === 7){
            setMenuWidth(25);
            setLinkText("block");
            setRotate(180);
        }else{
            setLinkText("none");
            setMenuWidth(7);
            setRotate(360);
        }
    }
    return(
        <>
        <div className="side-nav" style={{width: menuWidth + "vmin"}}>
            <div className="menu-icon">
                <ArrowForwardIosIcon onClick={toggleMenu} style={{transform:`rotate(${rotate}deg)`}} /> 
            </div>
            <div className="nav-links" >

            {
                navlinks.map((navlink,ind) => {
                    return(
                        <NavLink key={ind} exact activeclassname="active" to={navlink.path}>{navlink.icon} <div style={{display:linkText}}>{navlink.link} </div></NavLink>
                        )
                    })
                }
                </div>
        </div>
        </>
    )      
}


export default Sidenav;