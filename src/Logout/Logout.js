import React from 'react';

function Logout() {
  
  localStorage.clear();
  window.location.reload();
  window.location.href = "/login";

  
  return (
    <div>
        You have logged out. You will be redirected to the login page!
    </div>
  );
}

export default Logout;