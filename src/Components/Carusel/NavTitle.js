function NavTitle(props){
    return(
        <div className="NavTitle">
            <h1 className="NTitle">{props.title}</h1>
            <a href={props.link}>View All</a>
        </div>
    );
}

export default NavTitle;