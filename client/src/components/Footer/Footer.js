import twitter from './twitter.svg';
import './footer.css';

function Footer() {

  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }

    return (
      <div className=" footer mx-auto bg-white ">
          <div className="md:w-10/12 mx-auto px-10  py-6 bg-white">
            <div className="flex  ">
                <p className="pr-6">Feature Request</p>
                <span className="pr-6  text-sm" >
                  <Mailto  email="support@questionwave.com" >
                    Support
                  </Mailto>
                </span>
                <p className="pr-6">Legal</p>
                
                <img  alt='twitter' src={twitter} className="image-rendering"/>
            </div>
             
          </div>
        
        
      </div>
    );
  }
  
  export default Footer;
  