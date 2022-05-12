import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./sidenav.css";
import {useSelector} from "react-redux";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import PagesIcon from '@mui/icons-material/Pages';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Sidenav = (props) => {
    const auth = useSelector(state=> state.auth)
    const [menuWidth,setMenuWidth] = useState(50);
    const [rotate,setRotate] = useState(0)
    const [linkText,setLinkText] = useState("none");
    const [isShow,setIsShow] = useState(false);    
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
        if(menuWidth === 50){
            setMenuWidth(250);
            setLinkText("block");
            setRotate(180);
	    setIsShow(true);
        }else{
            setLinkText("none");
            setMenuWidth(50);
            setRotate(360);
	    setIsShow(false);
        }
    }
useEffect(() =>{


  window.addEventListener("click",e =>{
     
  })
},[menuWidth])
    return(
        <>
        <div className="side-nav" style={{width: (menuWidth + 10)+"px"}}>
            <div className="menu-icon"  onClick={toggleMenu}>
               { !isShow ? <MenuIcon/>:
    		<div className="menu-header">
		<div className="auth"><AccountCircleIcon/> <div>{auth.user.name} </div> </div>
		 <ArrowForwardIosIcon style={{transform:`rotate(${rotate}deg)`}} /> 
		  </div>
		}


            </div>
            <div className="nav-links" >

            {
                navlinks.map((navlink,ind) => {
                    return(
                        <NavLink style={{width:menuWidth}} key={ind} exact activeclassname="active" to={navlink.path}>{navlink.icon} <div style={{display:linkText}}>{navlink.link} </div></NavLink>
                        )
                    })
                }
                </div>
        </div>
        </>
    )      
}


export default Sidenav;
