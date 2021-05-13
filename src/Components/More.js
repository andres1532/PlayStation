function More(props){
    return(
        <div className="More">
            <h3 className="MoreTitle">{props.title}</h3>
            <div className="MoreImg">
                {props.img.map((ele, i) => (
                    <img key={i} src={ele.img} alt={ele.title}/>
                ))}

            </div>
        </div>
    );
}

export default More;