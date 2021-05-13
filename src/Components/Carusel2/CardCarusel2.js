function CardCarusel2(props) {
    return(
        <div className="CardCarusel2">
            <img src={props.img} alt={props.name}/>
            <h3>{props.name}</h3>
            <div className="Price">
                {props.price}
            </div>
            
        </div>
    );
}

export default CardCarusel2;