function Navbar(props) {
    return(
        <div className="Nav">
            <img src={props.img} alt="PS"/>
            
            <div className="options">
            <p>{props.option1}</p>
            <p>{props.option2}</p>
            <p>{props.option3}</p>
            <p>{props.option4}</p>
            <p>{props.option5}</p>
            
            </div>
        </div>

        
    );
}

export default Navbar;