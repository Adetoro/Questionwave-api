import { useHistory} from "react-router-dom";

import twitter from './twitter.svg';
import './footer.css';

function Footer() {
  let history = useHistory();

  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }

  function loadTwitter(){
    const win = window.open(`https://twitter.com/questionwave`, "_blank");
    win.focus();
  }

  function loadRequest(){
    history.push(`/feature-requests`);
  }

  function loadLegal(){
    history.push(`/legal`);
  }
  
              

    return (
      <div className=" footer mx-auto bg-white ">
          <div className="md:w-10/12 mx-auto px-10  py-6 bg-white">
            <div className="flex  ">
                <p className="pr-6 cursor-pointer" onClick={loadRequest}>Request a feature </p>
                <span className="pr-6  text-sm" >
                  <Mailto  email="support@questionwave.com" >
                    Support
                  </Mailto>
                </span>
                <p className="pr-6 cursor-pointer" onClick={loadLegal}>Legal</p>
                
                <img  alt='twitter' src={twitter} className="image-rendering cursor-pointer" onClick={loadTwitter}/>
            </div>
             
          </div>
        
        
      </div>
    );
  }
  
  export default Footer;
  