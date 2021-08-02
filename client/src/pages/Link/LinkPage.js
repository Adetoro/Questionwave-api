import React, { useEffect } from 'react';
import { withRouter, useHistory} from "react-router-dom";
import "./LinkPage.css";
import EdiText from 'react-editext';

import Footer from '../../components/Footer/Footer';
//import TestError from './../../TestError';

import success_icon from './success_icon.svg';
import link_icon from './link_icon.svg';

const LinkPage = (props) => {
    let {setTitle, setValue,setLinkId} = props
    let history = useHistory();

    useEffect(() => {        
        // const queryString = window.location.href;
        // const regex = "([a-z0-9_-]*[]?)$";
        // const found = queryString.match(regex);
        // const urlId = found[1]

        //console.log("props linkid " + props.LinkId)
        if (props.LinkId !== 0){
            fetch(`/api/link/${props.LinkId}`)
            .then(response => response.json())
            .then(data => {
                
                let dbTitle = data.title
                setTitle(dbTitle)
                setValue(dbTitle)
                setLinkId(props.LinkId)
            
            })
        }
        else{
           
        }
    }, []);
      
    const handleSave = (val) => {
        //console.log('Edited Value -> ', val)
        props.setValue(val);
        
        // Here, we invoke the callback with the new value
        props.onSave(val);
    }

    function handleCopy(event){
        navigator.clipboard.writeText(DisplayLink);
       
        const showSuccessMessage = document.getElementById("showSuccessMessage" );    
        showSuccessMessage.style.visibility = "visible";
        
        setTimeout(() => {
            showSuccessMessage.style.visibility = "hidden";
        }, 5000);
    }


    function handleUpdate(event) {
        fetch('/api/link/:id', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            title: props.Title,
            id: props.LinkId,
        })
        })
        .then(response => response.json())
        .then(data => {
            if(data){
                //console.log(props.Title, props.LinkId,)
                //console.log("data from put request: " + data)
                history.push(`/q/${props.LinkId}`);
                // const win = window.open(`/q/${props.LinkId}`, "_blank");
                //  win.focus();
            }
        })
        
    }
    let DisplayLink = `https://www.questionwave.com/q/${props.LinkId}`;

    if (props.LinkId === 0){
        return (
            <div id="container" className="md:w-6/12 mx-auto mt-10 px-10 py-28">
                <div className="text-4xl font-semibold text-center">
                     Oops!
                </div>
                <div className="pt-3 text-base font-normal text-center">
                     Can't access this page.
                </div>
                
                    <div className="sm:w-6/12  mx-auto">
                    <button className="  mt-6 blue_button text-lg font-bold 
                                        focus:outline-none focus:ring focus:-mid_blue"
                            onClick={() => history.push('/')}>
                        Go Home
                    </button>
                    </div>
                    
                
               
            </div>
        )
    }
    else {
        return (
            <div className="min-h-screen relative">  
                <div id="container" className="md:w-4/5 mx-auto sm:px-10 px-5 sm:py-28 py-16 ">
                    <div className=" rounded-xl bg-light_green border border-green p-2 flex items-center">  
                        <div className="w-5 h-5 mr-5">
                        <img alt='success' src={success_icon} />
                        </div>
                        <div className="sz14_text opacity-90">
                            Great! Your question link has been created. 
                        </div>
                    </div>

                    <div id="editTitle" className="mt-8 flex items-center w-full" >
                        <EdiText 
                            editOnViewClick 
                            submitOnEnter
                            type="text" 
                            className=" text-3xl font-extrabold" 
                            value={props.value} 
                            onSave={handleSave} />
                        {/* <div className="text-3xl font-extrabold">  
                        {props.Title} 
                        </div>
                        <button className="w-5 h-5 ml-5" >
                            <img alt='edit title' src={edit_icon} />
                        </button> */}
                    </div>

                    <div id="showSuccessMessage" className="successMessageStyle md:w-1/2 flex items-center" >
                        <div className="w-5 h-5 mr-5">
                            <img alt='success' src={success_icon} />
                        </div>
                        <div>Link successfully copied!</div>
                    </div>

                    <div className="mt-4 displayLink flex items-center cursor-pointer" onClick={handleCopy}>
                        {/* <input 
                            type="text" 
                            name="title" 
                            id="event-title"
                            value= {DisplayLink}
                            readOnly
                            className="rounded-md text-black-500 pl-3
                            focus:outline-none shadow w-full h-12 " />  */}
                            <div className="w-5 h-5 mr-5 ">
                                <img alt='link' src={link_icon} />
                            </div>
                            <div className="linkDetails">{DisplayLink}</div>
                            
                    </div>

                    <div className=" sm:mt-6 mt-2 sm:flex justify-between  sm:space-x-4">
                        <div className="sm:w-1/2 pt-4">
                            <button className="blue_button text-xl font-bold focus:outline-none focus:ring focus:border-mid_blue"
                                onClick={handleCopy}>
                                Copy question link
                            </button>
                        </div>

                        <div className="sm:w-1/2 pt-4">
                            <button className="white_button text-xl font-bold focus:outline-none focus:ring focus:border-mid_blue"
                                onClick={handleUpdate}>
                                Go to question page
                            </button>
                        </div>
                        
                        
                    </div>
                    
                    {/* <div id="linkCopied" className="px-4 py-3 leading-normal text-green bg-light_green mt-6 border rounded-lg " role="alert">
                        <p className="text-center">Link successfully copied!</p>
                    </div> */}

                    {/* <div id="linkCopied" 
                        className="bg-light_green  border-green rounded-b 
                        text-green mt-6 px-4 py-2 shadow-md animate-pulse hidden"
                        role="alert"> 

                        <div>
                        <p class="text-sm ">Link successfully copied!</p>
                        </div>
                    
                    </div> */}
                </div>
                <Footer/>
            </div>
                
        );
    }

      
    
}
  
  export default withRouter(LinkPage);
  