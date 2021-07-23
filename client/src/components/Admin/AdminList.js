import React from 'react';
import AdminUnit from './AdminUnit';

const AdminList = ({AdminTitle, AdminLinkid, AdminDate }) => {
   const adminComponent = AdminDate.map((AdminTitle,i) => {
        return <AdminUnit key={i} AdminTitle={AdminTitle[i]} AdminLinkid={AdminLinkid[i]} 
        AdminDate={AdminDate[i]} />
    })

    return (
        <div>
            {adminComponent}
        </div>
    )
}



export default  AdminList;