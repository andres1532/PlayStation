function Header(props) {
    return(
        <div className="Header">
          
            <span className="PsLogo">
                 <img src={props.img} alt="PS-logo"/>
            </span>
               
            <p>{props.option1}</p>
            <p>{props.option2}</p>
            <p>{props.option3}</p>
            <p>{props.option4}</p>
            <p>{props.option5}</p>
            <p>{props.option6}</p>
                   
            <div className="Header2"> 
            
            <p>{props.option7}</p>
            <button>Sign In</button>
            
            <img src={props.img2} alt="lupa"/>

            </div>


        </div>
    )
}

export default Header;