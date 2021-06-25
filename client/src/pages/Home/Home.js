import React, { useEffect } from 'react';
import { withRouter, useHistory } from "react-router-dom";
import Footer from '../../components/Footer/Footer';

import error_icon from './error.svg';
import './home.css';

const Home = props => {

    let history = useHistory();
    const {setLinkId, setTitle, LinkId} = props;

    useEffect(( ) => {
        fetch('/home') 
        .then(response => response.json())
        .then(data => {
            if(data){
              let dbLink = data;
              setLinkId(dbLink);
              setTitle("");
               console.log('from home data ' + data)
              //console.log('from home linkid ' + LinkId, Title)
            }
        })
        .catch(err => console.log('err'));
    }, []);

    function handleChange(event) {
        // Here, we invoke the callback with the new value
        props.onChange(event.target.value);  
    }
    //console.log("title length " +props.Title.length)

    const handleKeypress = event => { 
        //it triggers by pressing the enter key
        if (event.key ===  'Enter') {
            handleSubmit();
            console.log("keypress");
        }
    };

    function handleSubmit(event) {
        var updatedLink;
        

        let titleLength = props.Title.length;

        if (titleLength < 3){
            const errorMessage = document.getElementById("errorMessage");
            errorMessage.style.visibility = "visible";

            setTimeout(() => {
                errorMessage.style.visibility = "hidden";
            }, 1000);
        }
        else {
            fetch('/home') 
            .then(response => response.json())
            .then(data => {
            if(data){
            updatedLink = data;
            setLinkId(data);
            
            console.log('update link ' + data, LinkId, updatedLink)
            //console.log('from home linkid ' + LinkId, Title)
            }
        })
        .catch(err => console.log('err'));
            // Here, we invoke the callback with the new value
            setTimeout(() => {
                var newLink;
                const updateLink = new Promise((resolve, reject) => {
                    resolve (
                         newLink =  updatedLink + 1)
                });
                console.log("newLink " + newLink )
                updateLink.then((newLink) => {
                    fetch('/home', {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({

                        title: props.Title,
                        linkId: newLink,
                    })
                    })
                    .then(response => response.json())
                    .then(data => {
                        if(data){
                            console.log("POST Title, newlink " + props.Title,newLink)
                            //console.log("from homepage: " + data);
                            props.setLinkId(newLink);
                            //console.log("from homepage post: " + data, newLink)
                            history.push(`/link/${newLink}`); 
                        }
                    });
                })
            }, 1800);
        }
    }
      
     
    return (
        <div  className="sm:w-12/12 mx-auto min-h-screen relative">
            <div id=" " className=" md:w-10/12 mx-auto sm:px-10 px-5  pb-20">
                <div  className='flex w-full  pb-10  p-1 home_container md:space-x-2 max-w-full '>
                    <div className="lg:w-6/12 text-left sm:pt-24 pt-16 ">
                        <div  className='lg:w-full  '>
                            <p className='sm:text-4xl sz35_text font-extrabold tracking-tighter leading-10'>The best way to take questions from your audience</p>
                            <p className=' opacity-90 leading-6 mt-4 sz18_text'>Make your Q&A sessions faster. Or get questions ahead of your event. Share a question link with your audience.</p>
                        </div>

                        <div className='space-y-2 lg:w-9/12 '>
                            <p className='text-3xl font-extrabold tracking-tighter sm:mt-16 mt-12 leading-6 '>Get your question link</p>
                            <p className=' opacity-70 leading-6 sz14_text '>No registration required, it’s 100% free and super-fast.</p>
                        </div>

                        <div className='pt-8 ' >
                            <p className=' lg:w-9/12  text-base font-bold text-dark_grey '>What’s the title of your event?</p>
                            
                            <div className='mt-2 mb-4 lg:w-9/12 '>
                                <div id="showError" className='space-y-4 '>
                                    <input 
                                        type="text" 
                                        name="title" 
                                        id="event-title"
                                        required
                                        autoFocus
                                        placeholder="E.g. Instagram live with Charles Dairo" 
                                        onChange = {handleChange}
                                        onKeyPress= {handleKeypress}  
                                        className="rounded-md text-black-500 pl-3
                                        focus:outline-none focus:ring focus:-mid_blue shadow w-full h-12 placeholder-mid_gray" />
                                    
                                    <button 
                                        type="submit" 
                                        className="blue_button text-lg font-bold 
                                        focus:outline-none focus:ring focus:-mid_blue "

                                        onClick={handleSubmit}>
                                        Get your question link
                                    </button>
                                
                                    
                                    <div id="errorMessage" className="error flex items-center text-base">
                                        <div className="w-5 h-5 mr-5">
                                            <img alt='error' src={error_icon} />
                                        </div>
                                        <div>Title must be minimum of 3 characters</div>
                                    </div>                                
                                </div>                            
                            </div>                                               
                        </div>
                        
                    </div>

                    <div id="hide_this " className='lg:w-6/12 pt-6 home_background'>
                        <div className="phone_mockup image-rendering">
                            {/* <img alt='demo' src={demo} className='object-center'/>   */}
                        </div>
                        {/* <img alt='demo' src={demo}   className='image-rendering rotate_this hp_image ' /> */}
                    </div>
                        

                </div>
                
            </div>
            <Footer/>
        </div>
    );
}

export default withRouter(Home);
  