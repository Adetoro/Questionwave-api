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
                    for (let i=0; i<=n; i++){
                        
                            //console.log("so true " + i );
                            //SET STATE ARRAY WITH DATA FROM DATABASE
                            setAdminTitle(AdminTitle => [...AdminTitle,data[i].title])
                            setAdminLinkid(AdminLinkid => [...AdminLinkid,data[i].linkid])
                            setAdminDate(AdminDate => [...AdminDate,data[i].created]);
                            setAdminId(AdminId => [...AdminId,data[i].id]);
                        
                    }
               
              //console.log('from admin ' + data)
            }
        })
        .catch(err => console.log('unable to retrive data'));
    }

    useEffect(() => {
        updateAdmin();
    }, [n]);
    
        return (
            <div>
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