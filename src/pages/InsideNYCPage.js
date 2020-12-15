import BarboncinoPizzaBar from "./../image/BarboncinoPizzaBar.png"
import VanessaDumplings from "./../image/VanessasDumplings.png"
import JongroBBQ from "./../image/JongroBBQ.png"
import NomWahTeaParlor from "./../image/NomWahTeaParlor.png"

export default function DashboardPage(props) {
    return (
        <main className="Page">
            <h1>barboncino pizza bar</h1>
            <img src= {BarboncinoPizzaBar} alt="pizza" />
            <p>
        <ul>
        <li>city: Brooklyn, NY</li>
        <li>info: Lively eatery serving Neapolitan brick-oven pizzas plus salads, creative cocktails & more.</li>
        </ul>
            </p>

            <h1>vanessa's dumplings</h1>
            <img src= {VanessaDumplings} alt="dumplings" />
            <p>
        <ul>
        <li>city: Chinatown, NY</li>
        <li>info: Handmade dumplings, steamed buns & other Asian faves, plus bubble teas.</li>
        </ul>
            </p>

            <h1>jongro bbq</h1>
            <img src= {JongroBBQ} alt="korean bbq" />
            <p>
        <ul>
        <li>city: Koreatown, NY</li>
        <li>info: Korean BBQ & other traditional dishes served in a casual, open-timbered space with in-table grills.</li>
        </ul>
            </p>

            <h1>nom wah tea parlor</h1>
            <img src= {NomWahTeaParlor} alt="dim sum" />
            <p>
        <ul>
        <li>city: Chinatown, NY</li>
        <li>info: Vintage dim sum parlor dating back to 1920 with a drink menu that includes tea, beer & wine.</li>
        </ul>
            </p>

            

        
        
        
        
        
        
        
        
        
        
        
        
        </main>
    );
};

/*
import React from 'react';
import NYCinfo from './NYCinfo/NYCinfoData';
const NYCinfo = ({ NYCinfo, removeNYCinfo }) => {
  return (
    <section>
      <div className="title">
        <h2>Inside NYC</h2>
        <div className="underline"></div>
      </div>
      <div>
        {nycinfo.map((nycinfo) => {
          return <Tour key={nycinfo.id} {...nycinfo} removeNYCinfo={removeNYCinfo} />;
        })}
      </div>
    </section>
  );
};

export default NYCinfo;
*/





/*
export default class InsideNYCPage extends useState {
    state = {
        insidenycpage: NYCinfoData
    };
    removeInsideNYCPage = id => {
        const { insidenycpage } = this.insidenycpage;
        const sortedInsideNYCPage = insidenycpage.filter(insidenycpage => insidenycpage.id !== id);
        this.setState({
            insidenycpage: sortedInsideNYCPage
        });
    };
    render() {
        const { insidenycpage } = this.state;
        
        return (
            <section className="nycinfodata">
                {insidenycpage.map(insidenycpage => (
                <InsideNYCPage key={insidenycpage.id} insidenycpage={insidenycpage} removeInsideNYCPage= {this.removeInsideNYCPage} />
                ))}
            </section>
        )
        */ 

        /*export default InsideNYCPage;*/