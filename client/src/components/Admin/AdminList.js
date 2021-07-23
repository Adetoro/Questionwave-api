import React from 'react';
import AdminUnit from './AdminUnit';

const AdminList = ({AdminTitle, AdminLinkid, AdminDate, AdminId }) => {
   const adminComponent = AdminId.map((link,i) => {

        return <AdminUnit key={i} AdminTitle={AdminTitle[i]} AdminLinkid={AdminLinkid[i]}  AdminDate={AdminDate[i]} />
    })

    return (
        <div>
            {adminComponent}
        </div>
    )
}



export default  AdminList;