import React from 'react';
import AdminUnit from './AdminUnit';

const AdminList = ({AdminTitle, AdminLinkid, AdminDate, AdminId,NumQtn }) => {
   const adminComponent = AdminId.map((link,i) => {

        return <AdminUnit key={i} AdminTitle={AdminTitle[i]} AdminLinkid={AdminLinkid[i]}  AdminDate={AdminDate[i]} NumQtn={NumQtn[i]} />
    })

    return (
        <div>
            {adminComponent}
        </div>
    )
}



export default  AdminList;