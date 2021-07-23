import React, { useEffect } from 'react';
import { withRouter, useHistory} from "react-router-dom";
import "./Admin.css";

import Footer from '../../components/Footer/Footer';
//import TestError from './../../TestError';


const Admin = (props) => {
   let Showme =[];

    useEffect(( ) => {
        fetch('/api/admin/') 
        .then(response => response.json())
        .then(data => {
            if(data){
                Showme = data;
               console.log('from admin ' + data)
              //console.log('from home linkid ' + LinkId, Title)
            }
        })
        .catch(err => console.log('unable to retrive data'));
    });
    
        return (
            <div id="container" className="md:w-4/5 mx-auto px-10 py-28">
                <div className="text-xs ">
                     
                     {Showme}
                </div>
                <div className="pt-3 text-base font-normal text-center">
                     
                </div>
             
              
            </div>
                
        );
    }
  
    
        
export default withRouter(Admin);