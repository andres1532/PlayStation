function NavTitle2(props){
    return(
        <div className="NavTitle2">
            <h1 className="NTitle2">{props.title}</h1>
            <a href={props.link}>View All</a>
        </div>
    );
}

export default NavTitle2;