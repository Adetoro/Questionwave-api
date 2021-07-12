import React, { useState, useEffect} from 'react';

import AskQuestion from '../../components/AskQuestion/AskQuestion';
import QuestionList from '../../components/QuestionList';

import './Questions.css';
import message_icon from './message_icon.svg';

const Questions = (props) => {        
   
    //CHECK FOR USER INTERACTION AND RESET TIMER
    //  window.addEventListener("mousemove", ResetTimer);
    //  window.addEventListener("touchstart", ResetTimer);
    //  window.addEventListener("keydown", ResetTimer);

    //ROUTE TO HOMEPAGE
    function loadHome(){
        const homeReq = window.open(`/`);
        homeReq.focus();
      }

    //INITIALIZE STATE
    const [Count, setCount] = useState(0);
    const [Upvotes, setUpvotes] = useState([]);
    const [UserQuestions, setUserQuestions] = useState([]);
    const [QuestionId, setQuestionId] = useState([]);
    const [CreatedAt, setCreatedAt] = useState([]);
    const {setTitle,setLinkId} = props;
    const [i, seti] = useState(0);

   //COLLECT ID FROM URL - https://www.regextester.com/102550
   const queryString = window.location.href;
   const regex = "([a-z0-9_-]*[]?)$";
   const found = queryString.match(regex);
   const urlId = found[1]

    const updateQuestions = () => {
        //RE-INITIALIZE STATE ID, UPVOTE AND QUESTIONS TO EMPTY ARRAYS
        setQuestionId([]);
        setUpvotes([]);
        setUserQuestions([]);
        setCreatedAt([]);

        //GET DATA FROM DATABASE
        fetch(`/api/q/${urlId}`)
        .then(response => response.json())
        .then(data => {
            //console.log(data)
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
                    setLinkId(urlId);
                    setCount(DisplayCount - 1);
                }
                }
                
            else {
            console.log("");
            }
        })
    }

  useEffect(() => {
    

    updateQuestions();
    
  
  }, [i]);


    //RELOAD PAGE AFTER 1 MINUTE OF IDLENESS
    // function ResetTimer() {
    //     setTimeout(() => {
    //         updateQuestions();
    //     }, 30000);
    // }
    
 // IF THE TITLE IS VALID AND THERE IS AT LEAST 1 QUESTION
 //console.log( props.Title.length, Count);
  if ((props.Title.length > 2) && (Count > 0 ) ){
    return (

       

        <div className="w-full ">
            <div className="md:w-10/12 mx-auto static pb-16 ">
                <div className=" mx-auto sm:px-10 px-5 pt-12 pb-20">
               
            
                <div className="sm:pb-5 " >
                    
                    <div className=" sz24_text font-extrabold">  
                       {props.Title} 
                    </div>
                    <div className="sm:mt-5 mt-2 text-xl font-bold text-gray">  
                        {Count} questions so far
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
                    <div className="  sm:px-10 px-5 mx-auto mb-10  pt-3 h-14 ">
                        <AskQuestion LinkId={props.LinkId}
                        i={i} 
                        seti={seti}/>                        
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
                <div className=" mx-auto sm:px-10 px-5 pt-12 pb-20 ">
            
                <div className=" sm:pb-5 " >
                    <div className="sz24_text font-extrabold">  
                       {props.Title} 
                    </div>
                    <div className="sm:mt-5 mt-2 text-xl font-bold text-gray">  
                        {Count} questions so far
                    </div>
                </div>

                 <div className="md:mt-32 mt-12 sm:px-10 px-5 py-5 bg-white rounded-2xl h-auto flex space-x-4 select-none ">
                    <span className=" self-stretch mt-1 w-10">
                        <img alt='message' src={message_icon} />
                    </span>
                    <span className=" text-lg">
                    Questions will show up here once people start asking. Go ahead, 
                share your question link with people!
                    </span>
                                        
                </div> 
                
            </div>
            
            </div>
            <div className="w-full bottom-0 pb-6 fixed  bg-light_blue ">
                <div className="md:w-10/12 mx-auto py-2   ">
                    <div className=" sm:px-10 px-5 mx-auto mb-10  pt-3 h-14 ">
                        <AskQuestion LinkId={props.LinkId}
                        i={i} 
                        seti={seti}/>   
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
                <button className="  mt-6 blue_button text-lg font-bold 
                                    focus:outline-none focus:ring focus:-mid_blue"
                        onClick={loadHome}>
                    Go Home
                </button>
                </div>
                
            
           
        </div>
    )
  }
  
    
  
}
  
  export default Questions;
  