function Mozaico(props) {
    
    return(
        <div className="Mozaico">
           
            {props.imgs.map((ele, i) => (
                <img key={i} src={ele.img} alt={ele.title}/>
            )
                
            )}



        </div>
    );
}

export default Mozaico;