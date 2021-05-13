
import './App.css';

//Imagenes
import logo from "./Assets/Sony-simbolo.jpg";
import PS from "./Assets/Playstation.png";
import lupa from "./Assets/lupa.svg";
import PsBag from "./Assets/ps-store-logo.png";
import SpringSale from "./Assets/spring-sale.jpg";
import white from "./Assets/white.svg";

import ff14 from "./Assets/ff14-online.webp";
import MLB from "./Assets/MLB.webp";
import take2 from "./Assets/takes2.webp";
import collage from "./Assets/collage.webp";
import control from "./Assets/controlPS5.webp";
import home from "./Assets/home.webp"
import now from "./Assets/PS-Now.jpg";
import Alvo from "./Assets/Alvo.webp";
import Atelier from "./Assets/Atelier.webp";
import Enlisted from "./Assets/Enlisted.webp";
import Moto from "./Assets/Moto.webp";
import Nier from "./Assets/Nier.webp";
import Odd from "./Assets/Odd.webp";
import MLB2 from "./Assets/MLB2.webp";


//imagenes carusel 2
import Neighbor from "./Assets/Neighbor.webp";
import Returnal from "./Assets/Returnal.webp";
import Returnal2 from "./Assets/Returnal2.webp";
import Hood from "./Assets/Hood.webp";
import Hood2 from "./Assets/Hood2.webp";
import RE from "./Assets/RE.webp";
import RE2 from "./Assets/RE2.webp";
import RE3 from "./Assets/RE3.webp";
import Mass from "./Assets/Mass.webp";

//imagenees more
import PS5 from "./Assets/ps5.webp";
import PS4 from "./Assets/ps4.webp";
import Deals from "./Assets/deals.webp";
import Add from "./Assets/add.webp";
import Ftp from "./Assets/ftp.webp";
import Vr from "./Assets/vr.webp";

//componentes
import Logo from "./Components/Logo";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Mozaico from "./Components/Mozaico";
import Carusel from "./Components/Carusel/Carusel";
import Banner2 from "./Components/Banner2";
import Carusel2 from "./Components/Carusel2/Carusel2";
import Moree from "./Components/More";
import Footer from "./Components/Footer";


function App() {
  
  
  const Array2 = [{title:"titulo1", img: ff14}, {title:"titulo2", img: MLB}, 
                  {title:"titulo3", img: take2}, {title:"titulo4", img: collage}, 
                  {title:"titulo5", img: control}, {title:"titulo6", img: home}]

  const Legal=[ {title: "Support", url: "#"},
                {title: "Privacy Policy", url: "#"},
                {title: "Website Terms of Use", url: "#"},
                {title: "SiteMap", url: "#"},
                {title: "PlayStation Studios", url: "#"},
                {title: "Legal", url: "#"},
                {title: "About SIE", url: "#"}]

  const Support =[{title: "PSN Terms Of Service", url: "#"},
                {title: "PS Store Cancellation Policy", url: "#"},
                {title: "Health Warnings", url: "#"},
                {title: "About Ratings", url: "#"}]

  const Media=[ {title: "Facebook", url: "#"},
                {title: "Twitter", url: "#"},
                {title: "YouTube", url: "#"},
                {title: "Instragram", url: "#"},
                {title: "Android App", url: "#"},
                {title: "iOS App", url: "#"},]
  
  const Games=[{img: MLB ,
        title: "MLB® The Show™ 21 Digital Deluxe Edition",
        price: "US$99.99",
      },
      {
        img: Atelier,
        title: "Atelier Mysterious Trilogy Deluxe Pack",
        price: "US$89.99",
      },
      {
        img: MLB,
        title: "MLB® The Show™ 21 Jackie Robinson Edition",
        price: "US$84.99",
      },
      {
        img: MLB2,
        title: "MLB® The Show™ 21 PS5",
        price: "US$69.99",
      },
      {
        img: MLB2,
        title: "MLB® The Show™ 21 PS4",
        price: "US$59.99",
      },
      {
        img: Nier,
        title: "NieR Replicant ver.1.22474487139...",
        price: "US$59.99",
      },
      {
        img: Enlisted,
        title: "Ultimate Machine Gun Bundle",
        price: "US$59.99",
      },
      {
        img: Moto,
        title: "MotoGP™21",
        price: "US$49.99",
      },
      {
        img: Odd,
        title: "Oddworld: Soulstorm",
        price: "US$49.99",
      },
      {
        img: Odd,
        title: "Oddworld: Soulstorm",
        price: "US$49.99",
      },
      {
        img: Alvo,
        title: "ALVO VR",
        price: "US$49.99",
      }]

  const Soon = [{img: Neighbor ,
    title: "MLB® The Show™ 21 Digital Deluxe Edition",
    price: "US$99.99",
  },
  {
    img: Returnal,
    title: "Atelier Mysterious Trilogy Deluxe Pack",
    price: "US$89.99",
  },
  {
    img: Returnal2,
    title: "MLB® The Show™ 21 Jackie Robinson Edition",
    price: "US$84.99",
  },
  {
    img: Hood,
    title: "MLB® The Show™ 21 PS5",
    price: "US$69.99",
  },
  {
    img: Hood2,
    title: "MLB® The Show™ 21 PS4",
    price: "US$59.99",
  },
  {
    img: RE,
    title: "NieR Replicant ver.1.22474487139...",
    price: "US$59.99",
  },
  {
    img: RE2,
    title: "Ultimate Machine Gun Bundle",
    price: "US$59.99",
  },
  {
    img: RE3,
    title: "MotoGP™21",
    price: "US$49.99",
  },
  {
    img: Mass,
    title: "Oddworld: Soulstorm",
    price: "US$49.99",
  }]

  const More = [{title: "PS5",  img:PS5,  },
  {
    title: "PS4",  img:PS4,
  },
  {
    title: "All Deals",  img:Deals,
  },
  {
    title: "Add-ons",  img:Add,
  },
  {
    title: "Free to Play",  img:Ftp,
  },
  {
    title: "VR",   img:Vr,
  }]


  return (
    <div className="App">
      <Logo img={logo}/>
      <Header
        img={PS}
        option1="Games"
        option2="Hardware"
        option3="Services"
        option4="News"
        option5="Shop"
        option6="Support"
        option7="My Playstation"
        img2={lupa}
      />
      <Navbar 
        img={PsBag}
        option1="Latest"
        option2="Collections"
        option3="Deals"
        option4="PS5"
        option5="Subscriptions"
      />

      <Banner
        img={SpringSale}
        title="Spring Sale"
      />

      
      <div className="mozaicos">
        <Mozaico imgs={Array2}/>

      </div>

      <div className="TheCarusel">
        <Carusel
          title="New Games"
          link="#"
          img={Games}
        
        />

      </div>


     

      <Banner2
        
        img={now}
        title="Welcome to PlayStation Now"
      />

      <div className="TheCarusel2">
        <Carusel2
          title="Coming Soon"
          link="#"
          img={Soon}
        
        />

      </div>

      <div className="More">
        <Moree
          title="See More"
          img={More}
        
        />

      </div>


      <Footer 
        img={white}
        Legal={Legal}
        Support={Support}
        Media={Media}
        region= "Country / Region: United States" 
        copyright="© 2021 Sony Interactive Entertainment LLC"
      />
    </div>
  );
}

export default App;
