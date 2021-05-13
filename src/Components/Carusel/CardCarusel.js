function CardCarusel(props) {
    return(
        <div className="CardCarusel">
            <img src={props.img} alt={props.name}/>
            <h3>{props.name}</h3>
            <div className="Price">
                {props.price}
            </div>
            
        </div>
    );
}

export default CardCarusel;