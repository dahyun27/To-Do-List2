// import React, {createContext, useState} from 'react';

// const AppContext = createContext();

// const AppProvider = ({children}) => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(prevCount => prevCount + 1);
//   };

//   const contextValue = {
//     count,
//     increment,
//   };

//   return (
//     <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
//   );
// };

// export {AppContext, AppProvider};

import React, {createContext, useState} from 'react';

const AppContext = createContext();

const AppProvider = ({children}) => {
  const [username, setUsername] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const updateUsername = newUsername => {
    setUsername(newUsername);
  };

  const updateId = newId => {
    setId(newId);
  };

  const updateEmail = newEmail => {
    setEmail(newEmail);
  };

  const updatePassword = newPassword => {
    setPassword(newPassword);
  };

  const contextValue = {
    username,
    updateUsername,
    id,
    updateId,
    email,
    updateEmail,
    password,
    updatePassword,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export {AppContext, AppProvider};
