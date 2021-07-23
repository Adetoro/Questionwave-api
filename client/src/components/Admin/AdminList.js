import React from 'react';


const AdminList = ({AdminTitle, AdminLinkid, AdminDate }) => {
   const adminComponent = AdminDate.map((AdminTitle,i) => {
        return (
            <div>
                <div id="container" className="md:w-4/5 mx-auto px-10 py-28">
                    <div className="space-y-4 text-gray font-extrabold">
                        <div>TOTAL NUMBER OF QUESTIONS LINKS CREATED <span className="bg-white rounded-xl ml-2 py-1.5 px-5 ">3</span></div>
                        <div>TOTAL NUMBER OF QUESTIONS ASKED  <span className="bg-white rounded-xl ml-2 py-1.5 px-5 ">3</span></div>
                        <div>LINK WITH MOST QUESTIONS  <span className="bg-white rounded-xl ml-2 py-1.5 px-5 ">3</span></div>
                    </div>
                
                    <div  className="my-9">
                        <div className=" md:px-10 px-6 py-5 bg-white rounded-2xl h-auto flex items-center space-x-4 select-none ">
                            
                            <div className=" w-1/12 cellContent ">                                    
                                {AdminLinkid[i]}
                            </div>
    
                            <div className="md:w-6/12 w-5/12 cellContent">
                                {AdminTitle[i]}
                            </div>
    
                            <div className="md:w-2/12 w-2/12 cellContent">
                                no of q
                            </div>
    
                            <div className="md:w-2/12 w-2/12">
                                {AdminDate[i]}
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        )
   })
}



export default  AdminList;