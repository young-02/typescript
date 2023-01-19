import { useState } from 'react';

export const LoggIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogOut = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>LogOut</button>
      <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
    </div>
  );
};
