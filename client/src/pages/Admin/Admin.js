import React, { useState, useEffect} from 'react';
import { withRouter, useHistory} from "react-router-dom";
import "./Admin.css";

import AdminList from '../../components/Admin/AdminList';
//import TestError from './../../TestError';


const Admin = () => {
    const [AdminTitle,  setAdminTitle] =useState([]);
    const [AdminLinkid,  setAdminLinkid] =useState([]);
    const [AdminDate,  setAdminDate] =useState([]);
    let n;

    useEffect(() => {
        
        setAdminTitle([]);
        setAdminLinkid([]);
        setAdminDate([]);

        fetch('/api/admin/') 
        .then(response => response.json())
        .then(data => {
            if(data){
                n = data.length;
                    for (let i=0; i<=n; i++){
                        //SET STATE ARRAY WITH DATA FROM DATABASE
                        setAdminTitle(AdminTitle => [...AdminTitle,data[i].title])
                        setAdminLinkid(AdminLinkid => [...AdminLinkid,data[i].linkid])
                        setAdminDate(AdminDate => [...AdminDate,data[i].created]);
                    }               
              //console.log('from admin ' + data)
            }
        })
        .catch(err => console.log('unable to retrive data'));
    }, []);

    
    
        return (
            <div className='md:w-4/5 mx-auto px-10 py-28'>
                test
                {AdminTitle} 
                     
            </div>
                
        );
    }
  
    
        
export default withRouter(Admin);