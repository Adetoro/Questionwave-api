import React, { useState, useEffect} from 'react';
import { withRouter, useHistory} from "react-router-dom";
import "./Admin.css";

import AdminList from '../../components/Admin/AdminList';
//import TestError from './../../TestError';


const Admin = () => {
    const [AdminTitle,  setAdminTitle] =useState([]);
    const [AdminLinkid,  setAdminLinkid] =useState([]);
    const [AdminDate,  setAdminDate] =useState([]);
    const [AdminId,  setAdminId] =useState([]);
    let n;

    const updateAdmin = () => {
        
        setAdminTitle([]);
        setAdminLinkid([]);
        setAdminDate([]);
        setAdminId([]);

        fetch('/api/admin/') 
        .then(response => response.json())
        .then(data => {
            if(data){
                n = data.length;
                    for (let i=0; i<n; i++){
                            //SET STATE ARRAY WITH DATA FROM DATABASE
                            setAdminTitle(AdminTitle => [...AdminTitle,data[i].title])
                            setAdminLinkid(AdminLinkid => [...AdminLinkid,data[i].linkid])
                            setAdminDate(AdminDate => [...AdminDate,data[i].created]);
                            setAdminId(AdminId => [...AdminId,data[i].id]);
                            console.log('from admin ' + data[i])
                    }
               
              console.log('from admin ' + data)
            }
        })
        .catch(err => console.log('unable to retrive data'));
    }

    useEffect(() => {
        updateAdmin();
    }, []);
    
        return (
            <div  id="container" className="md:w-4/5 mx-auto px-10 py-28">
                <div className="space-y-4 text-gray font-extrabold">
                    <div>TOTAL NUMBER OF QUESTIONS LINKS CREATED <span className="bg-white rounded-xl ml-2 py-1.5 px-5 ">3</span></div>
                    <div>TOTAL NUMBER OF QUESTIONS ASKED  <span className="bg-white rounded-xl ml-2 py-1.5 px-5 ">3</span></div>
                    <div>LINK WITH MOST QUESTIONS  <span className="bg-white rounded-xl ml-2 py-1.5 px-5 ">3</span></div>
                </div>
                <AdminList 
                    AdminTitle={AdminTitle} 
                    AdminLinkid={AdminLinkid} 
                    AdminDate={AdminDate} 
                    AdminId={AdminId} 
                    n={n}
      
                        />   
            </div>
                
        );
    }
  
    
        
export default withRouter(Admin);