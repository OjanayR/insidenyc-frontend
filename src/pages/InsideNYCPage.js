
import React, { useState } from "react";
import { NYCinfoData}  from '../NYCinfoData'


/*import "./App.scss";*/


export default class InsideNYCPage extends useState {
    state={
        NYCinfo: NYCinfoData
    };
    render() {
        const { city, img, name, info } = this.props.nycinfodata;

    {/*
        return <article className="InsideNYC">

    <div className ="img-container">
    <img 
    src={} 
    alt=""
    /> 
    <span className="close-btn">
        <i className="fas fa-window-close" />
    </span>  
    </div>
    <div className="NYCinfo">
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
            Info{""}
            <span>
                <i className="fas fa-caret-square-down" />
        </span>
        </h5>
        <p>{info}</p>
    </div>
    </article>;
    }  
}
*/}



{/*
return (
<section className="nycinfodata">
{NYCinfo.map(NYCinfo => {
    return <InsideNYCPage key={NYCinfoData.id} NYCinfoData = {NYCinfoData} />;
})}
</section>
);
*/}


{/*
export default function DashboardPage(props) {
    return (
        <main className="Page">
            <h1>Inside NYC</h1>
        </main>
    );
};
*/}