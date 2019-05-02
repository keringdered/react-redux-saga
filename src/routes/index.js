import React,{Component} from 'react';
import {
    NavLink
} from "react-router-dom";
import {APP_NAME} from "../constants/ActionTypes";

class Routes extends Component{
    render() {
        return(
            <div>
                <h1>{APP_NAME} SPA</h1>
                <ul className="header">
                    <li><NavLink to="/" >Home</NavLink></li>
                    <li><NavLink to="/stuff">Search</NavLink></li>
                    <li><NavLink to="/news">News</NavLink></li>
                    <li><NavLink to="/all-categories">All Categories</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        );
    }
}
export default Routes;