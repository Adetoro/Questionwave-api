import React from 'react';

const AdminUnit = (props) => {
    let {AdminTitle, AdminLinkid, AdminDate, NumQtn} = props;

    function visitPage(){
        const win = window.open(`https://www.questionwave.com/q/${AdminLinkid}`, "_blank");
        win.focus();
    }

    return (
        <div>
        

        <div  className="my-9">
            <div className=" md:px-10 px-2 py-5 bg-white rounded-2xl h-auto flex items-center space-x-1.5  ">
                
                <div className=" w-2/12 cellContent adminTableTitle text-blue underline cursor-pointer" onClick={visitPage}>                                    
                    {AdminLinkid} 
                </div>

                <div className="w-5/12 cellContent adminTableTitle">
                    {AdminTitle} 
                </div>

                <div className="md:w-1/12 w-2/12 cellContent adminTableTitle">
                    {NumQtn}
                </div>

                <div className="w-3/12 adminTableTitle break-all">
                    {AdminDate}
                </div>
            </div> 
        </div>
    </div>
    );

    
}

export default AdminUnit;