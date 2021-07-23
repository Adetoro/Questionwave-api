import React from 'react';

const AdminUnit = (props) => {
    let {AdminTitle, AdminLinkid, AdminDate} = props;

    return (
        <div>
        

        <div  className="my-9">
            <div className=" md:px-10 px-6 py-5 bg-white rounded-2xl h-auto flex items-center space-x-4 select-none ">
                
                <div className=" w-1/12 cellContent ">                                    
                    {AdminLinkid} 
                </div>

                <div className="md:w-6/12 w-5/12 cellContent">
                    {AdminTitle} 
                </div>

                <div className="md:w-2/12 w-2/12 cellContent">
                    3
                </div>

                <div className="md:w-2/12 w-2/12">
                    {AdminDate}
                </div>
            </div> 
        </div>
    </div>
    );

    
}

export default AdminUnit;