import React from 'react';
import QuestionUnit from './QuestionUnit/QuestionUnit';

const QuestionList = ({questionId,  questionContent, questionUpvotes, createdAt,setUpvotes, Upvotes, LinkId}) => {
   const questionComponent = createdAt.map((question,i) => {
       return <QuestionUnit key={i} questionUpvotes={questionUpvotes[i]} questionContent={questionContent[i]} 
       questionId={questionId[i]} setUpvotes={setUpvotes} LinkId={LinkId} />
   })

   return (
       <div>
           {questionComponent}
       </div>
   )
    
}

export default QuestionList;