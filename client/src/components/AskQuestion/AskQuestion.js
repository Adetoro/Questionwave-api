import React, {useState} from 'react';
import error_icon from './error.svg';
import './askQuestion.css';

import send_question_icon from './send_question_icon.svg';

function AskQuestion(props) {

    //let newQuestion 
    const [question, setQuestion] = useState("");
    const {Update, setUpdate} = props;


    function handleChange(event){
        setQuestion(event.target.value);
    }

    function scrollToBottom() {
        setTimeout(() => {
            window.scroll({top: 90000000000000000000000000000000, left: 0, behavior: 'smooth' });
            console.log("scroll");
        },4000);
    }

    function handleCopy(event){
        const PageLink = window.location.href;
        navigator.clipboard.writeText(PageLink);
    }

    function reloadPage() {
       setUpdate(Update => Update + 1); 
    }

    const handleKeypress = event => { 
        //it triggers by pressing the enter key
      if (event.key ===  'Enter') {
        handleSubmit();
        scrollToBottom();
      }
    };
  
    function handleSubmit(event) {
        let questionLength = question.length;

        if (questionLength < 8){
            const errorMessage = document.getElementById("errorMessage");
            errorMessage.style.visibility = "visible";
            setTimeout(() => {
                errorMessage.style.visibility = "hidden";
            }, 5000);
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
                   setUpdate(Update => Update + 1); 

                    setQuestion("")
                }       
            })
        }

    };

    return (
        <div>
            <div id="askNew" className=" flex ">
                <input   
                id="mainInput"
                type="text"
                value={question}
                autoFocus
                className="  h-12 text-black-500 outline-none p-5 overflow-auto placeholder-mid_gray" 
                placeholder='Ask a question...'
                onKeyPress= {handleKeypress}  
                onChange={handleChange} 
                />
                
                <button 
                    onClick={() => {handleSubmit();  scrollToBottom();}}  
                    type="submit" 
                    className="  ">
                    <img alt="send question" src={send_question_icon} className="ask_button"/>
                </button>
            </div>

            <div className="flex justify-between">
                <div className="  rounded cursor-pointer copylink_button flex items-center" onClick={handleCopy}>
                    <div>
                    <svg width="13" height="13" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4815 6.51718C13.582 8.61984 13.5531 11.9909 11.4941 14.0614C11.4903 14.0656 11.4857 14.0702 11.4815 14.0744L9.11899 16.4369C7.03528 18.5206 3.6452 18.5203 1.56181 16.4369C-0.521904 14.3535 -0.521904 10.963 1.56181 8.87968L2.86631 7.57517C3.21225 7.22924 3.80801 7.45916 3.82587 7.94804C3.84865 8.57108 3.96038 9.19704 4.16653 9.80151C4.23635 10.0062 4.18647 10.2326 4.03354 10.3855L3.57345 10.8456C2.58816 11.8309 2.55726 13.4352 3.53284 14.4302C4.51806 15.4349 6.13743 15.4409 7.13021 14.4481L9.4927 12.0859C10.4838 11.0948 10.4796 9.49291 9.4927 8.50597C9.36259 8.3761 9.23153 8.27521 9.12915 8.20472C9.05673 8.15498 8.99693 8.08901 8.95453 8.01207C8.91212 7.93512 8.88829 7.84933 8.88492 7.76154C8.871 7.39004 9.00263 7.00722 9.29618 6.71367L10.0364 5.97346C10.2305 5.77936 10.5349 5.75552 10.76 5.9126C11.0178 6.09258 11.2592 6.29489 11.4815 6.51718V6.51718ZM16.4362 1.56219C14.3528 -0.52124 10.9628 -0.521521 8.87905 1.56219L6.51655 3.92469C6.51233 3.92891 6.50776 3.93348 6.5039 3.9377C4.44494 6.00812 4.41607 9.37922 6.51655 11.4819C6.73884 11.7042 6.98025 11.9065 7.23799 12.0864C7.46306 12.2435 7.76759 12.2196 7.96165 12.0256L8.70183 11.2854C8.99539 10.9918 9.12701 10.609 9.11309 10.2375C9.10972 10.1497 9.08589 10.0639 9.04348 9.98696C9.00108 9.91001 8.94128 9.84404 8.86886 9.79431C8.76648 9.72382 8.63542 9.62292 8.50531 9.49305C7.51837 8.50611 7.51422 6.90418 8.50531 5.91309L10.8678 3.55094C11.8606 2.55817 13.4799 2.56414 14.4652 3.56887C15.4408 4.56379 15.4099 6.16812 14.4246 7.1534L13.9645 7.61349C13.8115 7.76642 13.7617 7.99283 13.8315 8.19751C14.0376 8.80199 14.1494 9.42794 14.1721 10.051C14.19 10.5399 14.7858 10.7698 15.1317 10.4238L16.4362 9.11934C18.52 7.03602 18.52 3.64555 16.4362 1.56219V1.56219Z" fill="#1b7eda"/>
                    </svg>

                    </div>
                    <div className="sz12_text ml-1">
                        Copy question link
                    </div>
                </div>

                <div className=" rounded cursor-pointer reload_button flex items-center" onClick={reloadPage}>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M6.51155 0.203135C8.19416 0.206157 9.72187 0.869207 10.8498 1.94709L11.7566 1.04026C12.1405 0.656383 12.7969 0.928266 12.7969 1.47117V4.87501C12.7969 5.21156 12.5241 5.48439 12.1875 5.48439H8.78366C8.24076 5.48439 7.96887 4.82801 8.35275 4.44411L9.41281 3.38405C8.62916 2.65028 7.61513 2.24383 6.53783 2.23454C4.19179 2.21428 2.21424 4.11286 2.23453 6.53678C2.25377 8.83618 4.11795 10.7656 6.5 10.7656C7.54424 10.7656 8.53117 10.393 9.30894 9.7105C9.42937 9.60485 9.61124 9.61128 9.72453 9.72454L10.7316 10.7316C10.8553 10.8553 10.8492 11.057 10.7193 11.1742C9.60279 12.1828 8.12312 12.7969 6.5 12.7969C3.02235 12.7969 0.20315 9.97769 0.203125 6.50006C0.2031 3.0264 3.03789 0.196915 6.51155 0.203135Z" fill="white"/>
                    </svg>
                    </div>
                    <div className="sz12_text text-white ml-1">
                        Reload questions
                    </div>
                </div>
            </div>
            

                <div id="errorMessage" className="questionpage_error flex items-center sm:text-base sz14_text">
                    <div className="w-5 h-5 mr-5">
                        <img alt="error" src={error_icon}/>
                    </div>
                    <div>Question must be minimum of 8 characters</div>
                </div>
        </div>
        
    );
}
  
  export default AskQuestion;
  
  