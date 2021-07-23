import React, { useEffect } from 'react';
import { withRouter, useHistory} from "react-router-dom";
import "./Admin.css";

import Footer from '../../components/Footer/Footer';
//import TestError from './../../TestError';


const Admin = (props) => {
    const Showme =[];

    useEffect(( ) => {
        fetch(/api/admin/') 
        .then(response => response.json())
        .then(data => {
            if(data){
                Showme = data;
               console.log('from home data ' + data)
              //console.log('from home linkid ' + LinkId, Title)
            }
        })
        .catch(err => console.log('err'));
    }, []);
    
        return (
            <div id="container" className="md:w-6/12 mx-auto mt-10 px-10 py-28">
                <div className="text-4xl font-semibold text-center">
                     
                     {Showme}
                </div>
                <div className="pt-3 text-base font-normal text-center">
                     
                </div>
             
              
            </div>
                
        );
    }
  
    
        
export default withRouter(Admin);