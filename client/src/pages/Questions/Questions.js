import React, { useState, useEffect} from 'react';

import AskQuestion from '../../components/AskQuestion/AskQuestion';
import QuestionList from '../../components/QuestionList';

import './Questions.css';
import message_icon from './message_icon.svg';

const Questions = (props) => {

  const [Count, setCount] = useState(0);
  const [Upvotes, setUpvotes] = useState([]);
  const [UserQuestions, setUserQuestions] = useState([]);
  const [QuestionId, setQuestionId] = useState([]);
  const [CreatedAt, setCreatedAt] = useState([]);
  const {setTitle,setLinkId} = props;

  useEffect(() => {
    //COLLECT ID FROM URL - https://www.regextester.com/102550
    const queryString = window.location.href;
    const regex = "([a-z0-9_-]*[]?)$";
    const found = queryString.match(regex);
    const urlId = found[1]

    //RE-INITIALIZE STATE ID, UPVOTE AND QUESTIONS TO EMPTY ARRAYS
    setQuestionId([]);
    setUpvotes([]);
    setUserQuestions([]);
    setCreatedAt([]);

    //GET DATA FROM DATABASE
    fetch(`/q/${urlId}`)
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
                setLinkId(urlId);
                setCount(DisplayCount - 1);
                
            }
            }
           
            
        else {
           console.log("");
        }
    })
  }, [Count]);

  

    
  if (Count < 1 ) {
    return (

        <div>
            <div className="md:w-10/12 mx-auto static   ">
                <div className="md:w-9/12 mx-auto px-10 py-20 ">
            
                <div className="" >
                    <div className="text-3xl font-extrabold">  
                       {props.Title} 
                    </div>
                    <div className="mt-5 text-xl font-bold text-gray">  
                        {Count} questions so far
                    </div>
                </div>

                 <div className="mt-32 px-10 py-5 bg-white rounded-2xl h-auto flex space-x-4 select-none ">
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
                    <div className=" md:w-9/12 px-10 mx-auto mb-10  pt-2 h-14 ">
                        <AskQuestion LinkId={props.LinkId}
                        Count={Count} 
                        setCount={setCount}/>   
                    </div>
                </div>
            </div>
        </div>
            
    );
  }

  else {
    return (

        <div className="w-full ">
            <div className="md:w-10/12 mx-auto static  ">
                <div className="md:w-9/12 mx-auto px-10 py-20">
               
            
                <div className="" >
                    
                    <div className="text-3xl font-extrabold">  
                       {props.Title} 
                    </div>
                    <div className="mt-5 text-xl font-bold text-gray">  
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
            <div className="w-full bottom-0 pb-6 fixed  bg-light_blue ">
                <div className="md:w-10/12 mx-auto py-2   ">
                    <div className=" md:w-9/12 px-10 mx-auto mb-10  pt-2 h-14 ">
                        <AskQuestion LinkId={props.LinkId}
                        Count={Count} 
                        setCount={setCount}/>                        
                    </div>
                </div>
            </div>
        </div>
            
    );
  }
  
    
  
}
  
  export default Questions;
  