import twitter from './twitter.svg';
import './footer.css';

function Footer() {
    return (
      <div className=" footer mx-auto  bg-white ">
          <div className="md:w-10/12 mx-auto px-10
      py-8 bg-white">
            <div className="flex text-sm">
                <p className="pr-8">Feature Request</p>
                <p className="pr-8">Support</p>
                <p className="pr-8">Legal</p>
                <img  alt='twitter' src={twitter} className="image-rendering"/>
            </div>
             
          </div>
        
        
      </div>
    );
  }
  
  export default Footer;
  