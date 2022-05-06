import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '754302986702-42pptigl4t8cej4qp2goom7c5d47952o.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout was successful!');
    alert('Logout was successful!');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;