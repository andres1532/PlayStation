import CardCarusel2 from "./CardCarusel2";
import NavTitle2 from "./NavTitle2";
import Slide2 from "react-elastic-carousel";

function Carusel2(props){
    return(
        <div className="Carusel2">
            <NavTitle2 title={props.title} link={props.link}/>

            <Slide2 itemsToShow={5} pagination={false} showArrows={true}>
                {props.img.map((ele, i) => (
                    <CardCarusel2 key={i} img={ele.img} name={ele.title} price={ele.price} />
                ))}
                <a className="Soon" href={props.link}>View All</a>


            </Slide2>
        </div>
    );
}

export default Carusel2;