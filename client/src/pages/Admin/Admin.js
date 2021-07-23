import React, { useState, useEffect} from 'react';
import { withRouter, useHistory} from "react-router-dom";
import "./Admin.css";

import Footer from '../../components/Footer/Footer';
//import TestError from './../../TestError';


const Admin = (props) => {
    const [AdminTitle,  setAdminTitle] =useState([]);
    const [AdminLinkid,  setAdminLinkid] =useState([]);
    const [AdminDate,  setAdminDate] =useState([]);


    useEffect(( ) => {
        fetch('/api/admin/') 
        .then(response => response.json())
        .then(data => {
            if(data){
                let n = data.length;
                    for (let i=0; i<n; i++){
                        if (data[i].question !== null) {
                            //console.log("so true " + i );
                            //SET STATE ARRAY WITH DATA FROM DATABASE
                            setAdminTitle(AdminTitle => [...AdminTitle,data[i].title])
                            setAdminLinkid(AdminLinkid => [...AdminLinkid,data[i].linkid])
                            setAdminDate(AdminDate => [...AdminDate,data[i].created]);
                        }
                        else{
                            console.log(" ");
                        }
                    }
               console.log('from admin ' + data)
              //console.log('from home linkid ' + LinkId, Title)
            }
        })
        .catch(err => console.log('unable to retrive data'));
    });
    
        return (
            <div id="container" className="md:w-4/5 mx-auto px-10 py-28">
                <div className="text-xs ">
                     {AdminTitle}
                     {AdminLinkid}
                     {AdminDate}
                </div>
                <div className="pt-3 text-base font-normal text-center">
                     
                </div>
             
              
            </div>
                
        );
    }
  
    
        
export default withRouter(Admin);