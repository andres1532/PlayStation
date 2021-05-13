function Banner(props){
    return(
        <div className="Banner">
            <img src={props.img} alt={props.imgname}/>
            <div className="text">
                <h1>{props.title}</h1>
                <button>See More</button>
            </div>
        </div>
    );
}

export default Banner;