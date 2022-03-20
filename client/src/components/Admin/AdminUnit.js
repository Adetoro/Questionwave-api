import React from 'react';

const AdminUnit = (props) => {
    let {AdminTitle, AdminLinkid, AdminDate, NumQtn} = props;

    function visitPage(){
        const win = window.open(`https://www.questionwave.com/q/${AdminLinkid}`, "_blank");
        win.focus();
    }

     const defaultDateOptions ={
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hourCycle: 'h12'
    }

    function  formatDate(date, options= defaultDateOptions) {
        try{
            const shortEnNGFormatter = Intl.DateTimeFormat('en-GB',options);
            return shortEnNGFormatter.format(new Date(date));
        }
        catch(e){
        return 'N/A'
        }
    }

    function  formatDateTime(date, options= defaultDateOptions) {
        try{
            const d = formatDate(date, options).split(',');
            const datetime = d[0]+","+d[1].toUpperCase();
            return datetime;
        }
        catch(e){
        return 'N/A'
        }
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
                    {formatDateTime(AdminDate)}
                </div>
            </div> 
        </div>
    </div>
    );

    
}

export default AdminUnit;