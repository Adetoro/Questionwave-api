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
    const [AdminTot,  setAdminTot] =useState([]);
    let n;
    const [NumQtn,  setNumQtn] =useState([]);
    const [TotalQ,  setTotalQ] =useState([]);
    

    const updateAdmin = () => {
        
        setAdminTitle([]);
        setAdminLinkid([]);
        setAdminDate([]);
        setAdminId([]);

        fetch('/api/admin/') 
        .then(response => response.json())
        .then(data => {
            if(data){
                setAdminTot(data.length);
                n = data.length;
                    for (let i=0; i<n; i++){
                            //SET STATE ARRAY WITH DATA FROM DATABASE
                            setAdminTitle(AdminTitle => [...AdminTitle,data[i].title])
                            setAdminLinkid(AdminLinkid => [...AdminLinkid,data[i].linkid])
                            setAdminDate(AdminDate => [...AdminDate,data[i].created]);
                            setAdminId(AdminId => [...AdminId,data[i].id]);
                            //console.log('from admin ' + data[i])
                    }
               
              //console.log('from admin ' + data)
            }
        })
        .catch(err => console.log('unable to retrive data'));
    }

   

    const getFromQuestionDetails = () => {
        

        fetch('/api/admin/table2') 
        .then(response => response.json())
        .then(data => {
            if(data){
              setTotalQ(data.length);
                //console.log('table 2 ' + data)
            }
        })
        .catch(err => console.log('unable to retrive data'));
    }

    const getQuestionCount = () => {
        setNumQtn([]);

        fetch('/api/admin/bylink') 
        .then(response => response.json())
        .then(data => {
            if(data){
                let l = data.length

                for (let i=0; i<l; i++){
                    //SET STATE ARRAY WITH DATA FROM DATABASE
                    setNumQtn(NumQtn => [...NumQtn,data[i].count])
                }
                console.log('number og questions bylink ' + data)
            }
               
             
        })
        .catch(err => console.log('unable to retrive data'));
    }

    useEffect(() => {
        updateAdmin();
        getFromQuestionDetails();
        getQuestionCount();
    }, []);
    
        return (
            <div  id="container" className="md:w-4/5 mx-auto px-10 py-28">
                <div className="space-y-5 text-gray adminTableTitle font-extrabold">
                    <div className="flex">
                        <div className="py-0.5">NUMBER OF LINKS CREATED </div> 
                        <span className="adminNumCell rounded ml-3 py-0.2 px-1.5 float-right ">{AdminTot}</span>
                    </div>

                    <div className="flex">
                        <div className="py-0.5">NUMBER OF QUESTIONS ASKED</div> 
                        <span className="adminNumCell rounded ml-3 py-0.2 px-1.5 float-right ">{TotalQ}</span>
                    </div>

                    {/* <div className="flex">
                        <div className="py-0.5">LINK WITH MOST QUESTIONS</div> 
                        <span className="adminNumCell rounded ml-3 py-0.2 px-1.5 float-right ">3</span>
                    </div> */}

                </div>
                <div  className="mt-9  text-xs">
                    <div className=" md:px-10 px-2 h-auto flex font-semibold items-center space-x-1.5 ">
                        
                        <div className="  w-2/12 cellContent adminTableTitle">                                    
                                LINKID
                        </div>

                        <div className=" w-5/12 cellContent adminTableTitle">
                            TITLE
                        </div>

                        <div className="md:w-1/12 w-2/12 cellContent adminTableTitle">
                            NUM
                        </div>

                        <div className=" w-3/12 adminTableTitle">
                            CREATED
                        </div>
                 </div> 
                </div>
                <AdminList 
                    AdminTitle={AdminTitle} 
                    AdminLinkid={AdminLinkid} 
                    AdminDate={AdminDate} 
                    AdminId={AdminId} 
                    NumQtn={NumQtn}
                    n={n}
      
                        />   
            </div>
                
        );
    }
  
    
        
export default withRouter(Admin);