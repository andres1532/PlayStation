import CardCarusel from "./CardCarusel";
import NavTitle from "./NavTitle";
import Slide from "react-elastic-carousel";

function Carusel(props){
    return(
        <div className="Carusel">
            <NavTitle title={props.title} link={props.link}/>

            <Slide itemsToShow={5} pagination={false} showArrows={true}>
                {props.img.map((ele, i) => (
                    <CardCarusel key={i} img={ele.img} name={ele.title} price={ele.price} />
                ))}
                <a className="Games" href={props.link}>View All</a>


            </Slide>
        </div>
    );
}

export default Carusel;