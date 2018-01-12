import React from "react";
import {Link, Route, Switch} from "react-router-dom";
import "./Services.css";

import Header from "../../Header";
import Service from "../Service";
import services from "../../../shared/services.json"


function Services(props){
    return(
        
        <div className="services-div">
        <Header brand="Fudge Free Plumbing" slogan="Let's get cleaning!"/>
            <div className="services">
               {services.map((service, i)=>{
                   return <Link key = {i} to={`/services/${i}`}>{service.name}</Link>
               })}
               <Switch>
                   <Route path='/services/:index' component={Service}/>
               </Switch>
            </div>
        </div>
    )
}

export default Services; 