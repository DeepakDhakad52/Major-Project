import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

export const AuthContext = createContext(null);

const AppWrapper = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      setIsLoggedIn
    }}>
      <App />
    </AuthContext.Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

