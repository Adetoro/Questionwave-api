import React, { useState } from "react";
import './QuestionUnit.css';


let upvoteArray = [];
if(typeof(Storage) !== "undefined") {
       // sessionStorage.removeItem('upvoteArray');
    // let loadSessionData = sessionStorage.getItem('upvoteArray');
    // let sessionData;
    // if (loadSessionData != null) {
    //    sessionData = loadSessionData.split(',');
    // }
    // else {
    //     sessionData = [1] 
    // }
    // upvoteArray.push(sessionData);

    // console.log("session "+sessionStorage.clickcount, "upvoteArray "+ upvoteArray);
    // console.log(" sessionData "+ sessionData);
    // console.log("is Array? " + Array.isArray(upvoteArray));
    
   
}
const QuestionUnit = (props) => {
    
    let  {questionId, questionContent,  questionUpvotes, LinkId, Update, setUpdate} = props;
    let [showUpvotes, setShowUpvotes] = useState(questionUpvotes);
    
    if(typeof(Storage) !== "undefined") {

        let loadSessionData = sessionStorage.getItem('upvoteArray');
        let sessionData;
        if (loadSessionData != null) {
            sessionData = loadSessionData.split(',').map(Number);
        }
        else {
            sessionData = [1]
        }
    
        upvoteArray = sessionData;}

         
    function arrayMatch(questionId, sessionData) {
        var arr = [];  // Array to contain match elements
        for(var i=0 ; i<questionId.length ; ++i) {
        for(var j=0 ; j<sessionData.length ; ++j) {
            if(questionId[i] == sessionData[j]) {    // If element is in both the arrays
                arr.push(questionId[i]);        // Push to arr array
                //mark upvoted questions as upvoted
                var element = document.getElementByClassName("upvote_icon");
                element.classList.add("markAsUpvoted");
            }
        }
        }
        
        return arr;  // Return the arr elements
        
    }
    
    function handleUpvote(event) {    
                
        
            //console.log(" sessionData, upvoteArray, questionId "+ sessionData, upvoteArray, questionId);

        if (upvoteArray.includes(questionId)){
            const upvoteDuplicateNotif =  document.getElementById("upvoteDuplicateNotif");
            upvoteDuplicateNotif.style.visibility = "visible";
            upvoteDuplicateNotif.animate([
                // keyframes                        
                        { transform: 'translateY(50px)'}                               
                ], {
                // timing options
                duration: 500
                });

            setTimeout(() => {
                upvoteDuplicateNotif.style.visibility = "hidden";
            }, 5000);
        }     
        else {
            let newUpvote =  questionUpvotes + 1 ;               
            setShowUpvotes(newUpvote);        
            upvoteArray.push(questionId);
            //console.log("upvote array " + upvoteArray)
            sessionStorage.setItem('upvoteArray', upvoteArray);

            //console.log("questionId, questionUpvotes, showUpvotes, newUpvote " + questionId, questionUpvotes, showUpvotes, newUpvote);

            const upvoteSuccessNotif =  document.getElementById("upvoteSuccessNotif");
            upvoteSuccessNotif.style.visibility = "visible";
            upvoteSuccessNotif.animate([
                // keyframes                        
                        { transform: 'translateY(50px)'}                               
                ], {
                // timing options
                duration: 500
                });

            setTimeout(() => {
                upvoteSuccessNotif.style.visibility = "hidden";
            }, 5000);
            

            fetch('/api/q/:id', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                question_id: questionId,
                question_upvotes: newUpvote,
                id: LinkId
            })
            })
            .then(response => response.json())
            .then(data => {
                if(data){
                    //console.log(data)
                    setUpdate(Update => Update + 1); 
                }
            })
            // console.log("session "+sessionStorage.clickcount, "questionId "+ questionId);
            
        }
          
    }
   


    return (
        <div> 
            <div id="upvoteSuccessNotif" className="sm:w-3/12 mx-auto bg-light_green border border-green p-2 rounded-md text-center flex justify-center items-center text-sm ">
                <svg className="mr-1" width="16" height="15" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.9479 0C13.788 0 10.699 0.938383 8.07166 2.69649C5.44428 4.45459 3.39649 6.95345 2.18724 9.87706C0.977992 12.8007 0.661597 16.0177 1.27807 19.1214C1.89454 22.2251 3.41618 25.0761 5.65059 27.3137C7.88499 29.5513 10.7318 31.0752 13.831 31.6926C16.9302 32.3099 20.1426 31.9931 23.062 30.7821C25.9814 29.5711 28.4766 27.5203 30.2322 24.8891C31.9877 22.2579 32.9248 19.1645 32.9248 16C32.9248 11.7565 31.2415 7.68687 28.2453 4.68629C25.249 1.68571 21.1852 0 16.9479 0ZM27.3828 10.63L14.2618 23.76L6.51304 16C6.24821 15.7348 6.09943 15.3751 6.09943 15C6.09943 14.6249 6.24821 14.2652 6.51304 14C6.77788 13.7348 7.13707 13.5858 7.5116 13.5858C7.88613 13.5858 8.24532 13.7348 8.51015 14L14.2818 19.78L25.4057 8.65C25.5368 8.51868 25.6925 8.41451 25.8638 8.34344C26.0351 8.27237 26.2188 8.23579 26.4042 8.23579C26.5897 8.23579 26.7733 8.27237 26.9446 8.34344C27.116 8.41451 27.2716 8.51868 27.4028 8.65C27.5339 8.78132 27.6379 8.93722 27.7089 9.1088C27.7799 9.28038 27.8164 9.46428 27.8164 9.65C27.8164 9.83572 27.7799 10.0196 27.7089 10.1912C27.6379 10.3628 27.5339 10.5187 27.4028 10.65L27.3828 10.63Z" fill="#13B43D"/>
                </svg>
                Upvoted
            </div>
            <div id="upvoteDuplicateNotif" className="sm:w-4/12 mx-auto bg-red  p-2 rounded-md text-center flex justify-center items-center  text-sm ">
                <svg className="mr-1" width="15" height="15" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.2707 0C5.95333 0 0 5.98133 0 13.3333C0 20.6853 5.98133 26.6667 13.3333 26.6667C20.6853 26.6667 26.6667 20.6853 26.6667 13.3333C26.6667 5.98133 20.6573 0 13.2707 0ZM14.6667 20H12V17.3333H14.6667V20ZM14.6667 14.6667H12V6.66667H14.6667V14.6667Z" fill="#CF062E"/>
                </svg>
                You can only upvote once
            </div>
            <div  className="my-9">
                <div className=" md:px-10 px-6 py-5 bg-white rounded-2xl h-auto flex items-center space-x-4 select-none overflow-auto ">
                    <div className="flex-col  -mt-1 items-center justify-start mr-2 w-5  ">                                    
                        <button id="upvoteButton" className="upvoteButton text-blue p-1 -mt-1" onClick={handleUpvote}>
                            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="upvote_icon  ">
                                <path d="M12.9056 7.33958L6.84161 0.154254C6.66803 -0.0514181 6.33381 -0.0514181 6.15839 0.154254L0.094437 7.33958C-0.130838 7.60752 0.0722788 8 0.436042 8H12.564C12.9277 8 13.1308 7.60752 12.9056 7.33958Z"  />
                            </svg>
                        </button> 
                        
                        <div className=" text-center text-lg text-gray -mt-1 ">
                            {showUpvotes} 
                        </div>
                        <div id="result"></div>
                    </div>

                    <span className=" text-lg  md:w-11/12 sm:w-11/12 w-10/12">
                    {questionContent} 
                    </span>
                                    
            </div>

            
         </div>
         </div>
    )
}

export default QuestionUnit; 