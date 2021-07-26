import React, { useState} from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import LinkPage from './pages/Link/LinkPage';
import Questions from './pages/Questions/Questions';
import FeatureRequests from './pages/FeatureRequests/FeatureRequests';
import Legal from './pages/Legal/Legal';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Admin from './pages/Admin/Admin';


import { BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';


function App () {
  const [Title, setTitle] = useState(" ");
  const [LinkId, setLinkId] = useState(0);
  const [value, setValue] = useState(" ")

  function handleChange(newTitle) {
    setTitle(newTitle);
  }

  // GENERATE NEW LINK ID FOR QUESTION LINK AND DATABASE  
  var newId;

 
  function increment(){
    newId = LinkId;

    setTimeout(() => {
      newId++;
    })
   
    return newId;
  }  
  function handleSubmit(newLinkId) {
    increment();
    setLinkId(newId);
    console.log("from app "+newId,LinkId)
    return newId;
    
  }

  function handleUpdate(newTitle) {
    setLinkId(LinkId);
  }

  function handleSave(newTitle) {
    setTitle(newTitle);
  }

  

  return (
    <div className=""> 
    
      
      <Router>
        <ErrorBoundary>
        <Header/>
        <Switch>
        
        <Home 
          exact path='/' 
          Title={Title} 
          LinkId={LinkId} 
          setTitle={setTitle}
          setLinkId={setLinkId}
          onSubmit={handleSubmit} 
          onChange={handleChange}  /> 

        <LinkPage 
          path='/link/:linkId'
          Title={Title} 
          LinkId={LinkId}
          value={value} 
          setTitle={setTitle}
          setLinkId={setLinkId}
          setValue={setValue}
          onUpdate={handleUpdate} 
          onSave={handleSave}  /> 

        <Questions 
          path='/q/:linkId'
          Title={Title} 
          setTitle={setTitle}
          setLinkId={setLinkId}
          LinkId={LinkId}/>                        

        <FeatureRequests 
          path='/feature-requests'
          Title={Title} 
          setTitle={setTitle}
          setLinkId={setLinkId}
          LinkId={LinkId}/>

          <Legal 
          path='/legal' />

          <Admin 
          path='/a/3TFgaPa' />
        </Switch>
        
        </ErrorBoundary>
      </Router>
      
    </div>
  );
}

export default App;
