import React, { useEffect } from 'react';
import './Dashboard.scss';

function AdminDashboard(props) {
  // let { getUserName, userName } = props;

  // useEffect(() => {
  //   getUserName();
  // });

  return (
    <div className="admin_dashboard_container">
      <h3>Welcome to Admin Dashbaord</h3>
      {/* {userName && <h4>{userName}</h4>} */}
    </div>
  );
}

export default AdminDashboard;
