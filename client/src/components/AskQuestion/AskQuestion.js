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

            <div className="flex">
                <div className="float-left cursor-pointer copylink_button" onClick={handleCopy}>
                    <div className="sz12_text ml-1">
                        copy link
                    </div>
                </div>

                <div className="float-right rounded cursor-pointer reload_button flex items-center" onClick={reloadPage}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 15 15" fill="none">
                        <path d="M13.3169 3.06592L12.4907 3.71191C11.3643 2.27197 9.61231 1.34766 7.64503 1.34766C4.24805 1.34766 1.49854 4.09424 1.49415 7.49268C1.48975 10.894 4.24512 13.6523 7.64503 13.6523C10.3008 13.6523 12.564 11.9678 13.4253 9.60791C13.4473 9.54639 13.415 9.47754 13.3535 9.45703L12.523 9.17139C12.494 9.16146 12.4623 9.16326 12.4347 9.1764C12.407 9.18954 12.3856 9.21298 12.375 9.2417C12.3486 9.31494 12.3193 9.38818 12.2886 9.45996C12.0352 10.0605 11.6719 10.5996 11.209 11.0625C10.7498 11.5225 10.2062 11.8896 9.60792 12.1436C8.98829 12.4058 8.32764 12.5391 7.64795 12.5391C6.9668 12.5391 6.30762 12.4058 5.68799 12.1436C5.08913 11.8907 4.5453 11.5235 4.08692 11.0625C3.62652 10.6034 3.25984 10.0591 3.00733 9.45996C2.74512 8.83887 2.61182 8.17969 2.61182 7.49854C2.61182 6.81738 2.74512 6.1582 3.00733 5.53711C3.26075 4.93652 3.62403 4.39746 4.08692 3.93457C4.54981 3.47168 5.08887 3.1084 5.68799 2.85352C6.30762 2.59131 6.96827 2.45801 7.64795 2.45801C8.32911 2.45801 8.98829 2.59131 9.60792 2.85352C10.2068 3.10641 10.7506 3.47361 11.209 3.93457C11.354 4.07959 11.4902 4.2334 11.6162 4.39453L10.7344 5.08301C10.7169 5.09651 10.7036 5.11465 10.6961 5.13536C10.6885 5.15608 10.6869 5.17851 10.6915 5.20009C10.6961 5.22166 10.7066 5.2415 10.722 5.25733C10.7374 5.27316 10.7569 5.28433 10.7783 5.28955L13.3506 5.91943C13.4238 5.93701 13.4956 5.88135 13.4956 5.80664L13.5073 3.15674C13.5059 3.06006 13.3931 3.00586 13.3169 3.06592V3.06592Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="sz12_text text-white ml-1">
                        reload questions
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
  
  