import React, {useState} from 'react';
import { ScrollTo } from "react-scroll-to";
import error_icon from './error.svg';
import './MakeRequest.css';

import send_question_icon from './send_question_icon.svg';

function MakeRequest(props) {

    //let newQuestion 
    const [question, setQuestion] = useState("");
    const {Count, setCount} = props;


    function handleChange(event){
        setQuestion(event.target.value);
    }

    const handleKeypress = event => { 
        //it triggers by pressing the enter key
      if (event.key ===  'Enter') {
        handleSubmit();
      }
    };
  
    function handleSubmit(event) {
        let questionLength = question.length;

        if (questionLength < 8){
            const errorMessage = document.getElementById("errorMessage");
            errorMessage.style.visibility = "visible";
            setTimeout(() => {
                errorMessage.style.visibility = "hidden";
            }, 3000);
        }

        else{
            fetch('/api/q/:id', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                linkId: props.LinkId,
                question: question,
            })
            })
            .then(response => response.json())
            .then(data => {
                if(data){
                    //console.log("new question: " + data);
                    //UPDATE COUNT TO TRIGGER USEEFFECT ON QUESTION PAGE (RE-RENDER PAGE TO SHOW NEW QUESTION)
                    setCount(Count => Count + 1); 

                    setQuestion("")
                }       
            })
        }
    };

 
 
    return (
        <ScrollTo>
            {({ scroll }) => (

                <div >
                    <div id="askNew" className=" flex ">

                        <input   
                        id="mainInput"
                        type="text"
                        value={question}
                        autoFocus
                        className="  h-12 text-black-500 outline-none p-5 overflow-auto placeholder-mid_gray" 
                        placeholder='Make a request...'
                        onKeyPress= {handleKeypress}  
                        onChange={handleChange} 
                        />
                        
                        <button 
                            onClick={() => {handleSubmit(); setTimeout(()=>scroll({ y: 50000000000000000000000000000000000000, smooth: true }), 5000)}}  
                            type="submit" 
                            className="  ">
                            <img alt="send request" src={send_question_icon} className="ask_button"/>
                            
                        </button>
                        
                    </div>

                        <div id="errorMessage" className="request_error flex items-center sm:text-base sz14_text">
                            <div className="w-5 h-5 mr-5">
                                <img alt="error" src={error_icon}/>
                            </div>
                            <div>Request must be minimum of 8 characters</div>
                        </div>
                </div>
                
            )}
        </ScrollTo>
    );
}
  
  export default MakeRequest;
  
  