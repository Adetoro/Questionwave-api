import React, { useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";

import MakeRequest from '../../components/MakeRequest/MakeRequest';
import QuestionList from '../../components/QuestionList';

import './FeatureRequests.css';
import message_icon from './message_icon.svg';

const FeatureRequests = (props) => {
    let history = useHistory();

  const [Count, setCount] = useState(0);
  const [Upvotes, setUpvotes] = useState([]);
  const [UserQuestions, setUserQuestions] = useState([]);
  const [QuestionId, setQuestionId] = useState([]);
  const [CreatedAt, setCreatedAt] = useState([]);
  const {setTitle,setLinkId} = props;

  useEffect(() => {
    

    //RE-INITIALIZE STATE ID, UPVOTE AND QUESTIONS TO EMPTY ARRAYS
    setQuestionId([]);
    setUpvotes([]);
    setUserQuestions([]);
    setCreatedAt([]);

    //GET DATA FROM DATABASE
    fetch('/api/q/10006')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        if(data){
            if (data.length === 0){
                return { hasError: true };
            }
            else{
                //MATCH VARIABLES TO DATA FROM DATABASE
                let DisplayTitle = data[0].title;
                let DisplayCount = (data.length);

                let n = data.length;
                for (let i=0; i<n; i++){
                    if (data[i].question !== null) {
                        //console.log("so true " + i );
                        //SET STATE ARRAY WITH DATA FROM DATABASE
                        setQuestionId(QuestionId => [...QuestionId,data[i].question_id])
                        setUpvotes(Upvotes => [...Upvotes,data[i].upvotes])
                        setUserQuestions(UserQuestions => [...UserQuestions,data[i].question]);
                        setCreatedAt(CreatedAt => [...CreatedAt,data[i].created]);
                    }
                    else{
                        console.log(" ");
                    }
                }           
                //SET STATE WITH DATA FROM DATABASE
                setTitle(DisplayTitle);
                setLinkId(10006);
                setCount(DisplayCount - 1);
                
            }
            }
            
        else {
           console.log("");
        }
    })
  }, [Count]);

 // IF THE TITLE IS VALID AND THERE IS AT LEAST 1 QUESTION
 //console.log( props.Title.length, Count);
  if ((props.Title.length > 2) && (Count > 0 ) ){
    return (

        <div className="w-full ">
            <div className="md:w-10/12 mx-auto static pb-16 ">
                <div className="md:w-9/12 mx-auto sm:px-10 px-5 pt-12 pb-20">
               
            
                <div className="sm:pb-5 " >
                    
                    <div className=" sz24_text font-extrabold">  
                       {props.Title} 
                    </div>
                    <div className="sm:mt-5 mt-2 text-xl font-bold text-gray">  
                        {Count} requests so far
                    </div>
                </div>

                <div >
                        <QuestionList 
                            LinkId={props.LinkId} 
                            createdAt={CreatedAt} 
                            questionId={QuestionId}  
                            questionContent={UserQuestions} 
                            questionUpvotes={Upvotes}
                            setUpvotes={setUpvotes}
                             />                   
                </div>
                
            </div>
            
            </div>
            <div className="w-full bottom-0 pb-6 pt-1 fixed  bg-light_blue ">
                <div className="md:w-10/12 mx-auto py-2   ">
                    <div className=" md:w-9/12 sm:px-10 px-5 mx-auto mb-10  pt-3 h-14 ">
                        <MakeRequest LinkId={props.LinkId}
                        Count={Count} 
                        setCount={setCount}/>                        
                    </div>
                </div>
            </div>
        </div>
            
    );
   
}

// IF THE TITLE IS VALID AND THERE IS 0 QUESTIONS
 else if ((props.Title.length > 2) && (Count < 1 )) {
    return (
        <div>
            <div className="md:w-10/12 mx-auto static   ">
                <div className="md:w-9/12 mx-auto sm:px-10 px-5 pt-12 pb-20 ">
            
                <div className=" sm:pb-5 " >
                    <div className="sz24_text font-extrabold">  
                       {props.Title} 
                    </div>
                    <div className="sm:mt-5 mt-2 text-xl font-bold text-gray">  
                        {Count} requests so far
                    </div>
                </div>

                 <div className="md:mt-32 mt-12 sm:px-10 px-5 py-5 bg-white rounded-2xl h-auto flex space-x-4 select-none ">
                    <span className=" self-stretch mt-1 w-10">
                        <img alt='message' src={message_icon} />
                    </span>
                    <span className=" text-lg">
                    Requests will show up here once people start asking. Go ahead, 
                make a feature request!
                    </span>
                                        
                </div> 
                
            </div>
            
            </div>
            <div className="w-full bottom-0 pb-6 fixed  bg-light_blue ">
                <div className="md:w-10/12 mx-auto py-2   ">
                    <div className=" md:w-9/12 sm:px-10 px-10 mx-auto mb-10  pt-3 h-14 ">
                        <MakeRequest LinkId={props.LinkId}
                        Count={Count} 
                        setCount={setCount}/>   
                    </div>
                </div>
            </div>
        </div>
            
    );
  }

// IF THE TITLE IS NOT VALID 
  else  {
    return (
        <div id="container" className="md:w-6/12 mx-auto mt-10 sm:px-10 px-5 py-28">
            <div className="text-4xl font-semibold text-center">
                Hi, looks like this page does not exist.
            </div>
            <div className="pt-3 text-base font-normal text-center">
                
            </div>
            
            <div className="sm:w-6/12  mx-auto">
                <button className="  mt-6 blue_button text-lg font-bold focus:outline-none focus:ring focus:-mid_blue"
                        onClick={() => history.push('/')}>
                    Go Home
                </button>
            </div>
        </div>
    )
  }
  
    
  
}
  
  export default FeatureRequests ;
  