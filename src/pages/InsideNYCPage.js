
import React, { useState } from "react";

/*import "./App.scss";*/


export default class InsideNYCPage extends useState {
    render() {
        return <article className="InsideNYC">
    <div className ="img-container">
    <img width="200"
    src="https://user-images.githubusercontent.com/69225985/102027195-7bf1ae80-3d70-11eb-8345-c5a9f0b11645.png" alt=""
    /> 
    <span className="close-btn">
        <i className="fas fa-window-close" />
    </span>  
    </div>
    <div className="NYCinfo">
        <h3>City</h3>
        <h4>Name</h4>
        <h5>
            Info{""}
            <span>
                <i className="fas fa-caret-square-down" />
        </span>
        </h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatum cumque distinctio amet quibusdam libero itaque, quaerat, reiciendis illo pariatur beatae alias tempore architecto dolorem atque nulla ad error sit?</p>
    </div>
    </article>;
    }  
}









/*
export default function DashboardPage(props) {
    return (
        <main className="Page">
            <h1>Inside NYC</h1>
        </main>
    );
};
*/