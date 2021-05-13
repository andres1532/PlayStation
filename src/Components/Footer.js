function Footer (props) {
    return(
        <div className="footer">
            <div className="containerFooter">
                <div className="footerHeader">
                    <img src={props.img} alt="logo PS"/>
                    <h4>País/región:{props.region}</h4>
        </div>
        <div className="footerBody">
          <div className="footerColum">
            {props.Legal.map((ele, idx) => (
              <a key={idx} href={ele.url}>
                {ele.title}
              </a>
            ))}
          </div>
          <div className="footerColum">
            {props.Support.map((ele, idx) => (
              <a key={idx} href={ele.url}>
                {ele.title}
              </a>
            ))}
          </div>
          <div className="footerColum">
            {props.Media.map((ele, idx) => (
              <a key={idx} href={ele.url}>
                {ele.title}
              </a>
            ))}
          </div>
        </div>
        <p>{props.copyright}</p>
      </div>
    </div>
  );
}
export default Footer;
