import React, { useEffect } from 'react';
import { withRouter, useHistory } from "react-router-dom";
import Footer from '../../components/Footer/Footer';

import demo from './things_mockup.png';
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
    }, [LinkId]);

    function handleChange(event) {
        // Here, we invoke the callback with the new value
        props.onChange(event.target.value);
    }
    //console.log("title length " +props.Title.length)

    function handleSubmit(event) {
        let titleLength = props.Title.length;

        if (titleLength < 8){
            const errorMessage = document.getElementById("errorMessage");
            errorMessage.style.visibility = "visible";

            setTimeout(() => {
                errorMessage.style.visibility = "hidden";
            }, 1000);
        }
        else {
            // Here, we invoke the callback with the new value
            const updateLink = new Promise((resolve, reject) => {
                resolve (props.onSubmit())
            });
          
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
        }
    }
      
     
    return (
        <div  className="sm:w-12/12 mx-auto homeBackground">
            <div className=" md:w-10/12  mx-auto px-10 ">
                <div  className='flex w-full pt-20 p-2 home_container md:space-x-2 max-w-full '>
                    <div className="lg:w-6/12    space-y-11  text-left leading-10">
                        <div  className='lg:w-9/12 '>
                            <p className='text-4xl font-black '>The best way to take questions from your audience</p>
                            <p className='mt-9 text-lg font-medium'>Make your Q&A sessions faster. Share a question link with your audience.</p>
                        </div>

                        <div className='space-y-5 lg:w-9/12 '>
                            <p className='text-3xl font-extrabold mt-32'>Get your question link</p>
                            <p className='text-sm font-normal'>No registration required, it’s 100% free and super-fast.</p>
                        </div>

                        <div >
                            <p className=' lg:w-9/12  text-base font-bold '>What’s the title of your event?</p>
                            
                            <div className='mt-5 lg:w-9/12 '>
                                <div id="showError" className='space-y-4 '>
                                    <input 
                                        type="text" 
                                        name="title" 
                                        id="event-title"
                                        required
                                        placeholder="E.g. Instagram live with Charles Dairo" 
                                        onChange = {handleChange}
                                        className="rounded-md text-black-500 pl-3
                                        focus:outline-none focus:ring focus:-mid_blue shadow w-full h-12" />
                                    
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
                                        <div>Title must be minimum of 8 characters</div>
                                    </div>                                
                                </div>                            
                            </div>                                               
                        </div>
                        
                    </div>

                    <div id="hide_this" className='lg:w-5/12 p-2 rotate_this justify-self-end '>
                        <div className="hp_image_container ">
                        <img alt='demo' src={demo}/>
                        </div>

                        {/* <img alt='demo' src={demo}   className='image-rendering rotate_this hp_image ' /> */}
                    </div>
                        

                </div>
                
            </div>
            <Footer />
        </div>
    );
}

export default withRouter(Home);
  