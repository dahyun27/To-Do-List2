// import React, {useContext, useState} from 'react';
// import {View, Text, TextInput, Button} from 'react-native';
// import {AppContext} from './AppContext';

// const Profile = () => {
//   const {username, updateUsername} = useContext(AppContext);
//   const {id, updateId} = useContext(AppContext);
//   const {email, updateEmail} = useContext(AppContext);
//   const {password, updatePassword} = useContext(AppContext);

//   const [newUsername, setNewUsername] = useState('');
//   const [newId, setNewId] = useState('');
//   const [newEmail, setNewEmail] = useState('');
//   const [newPassword, setNewPassword] = useState('');

//   const handleUpdate = () => {
//     updateUsername(newUsername);
//     setNewUsername('');
//     updateId(newId);
//     setNewId('');
//     updateEmail(newEmail);
//     setNewEmail('');
//     updatePassword(newPassword);
//     setNewPassword('');
//   };

//   // const handleUpdateId = () => {
//   //   updateId(newId);
//   //   setNewId('');
//   // };

//   return (
//     <View>
//       <Text>username: {username}</Text>
//       <TextInput
//         style={{borderWidth: 1, padding: 10, marginVertical: 10}}
//         placeholder="Enter new username"
//         value={newUsername}
//         onChangeText={setNewUsername}
//       />
//       {/* <Button title="Update Username" onPress={handleUpdateId} /> */}
//       <Text>Id: {id}</Text>
//       <TextInput
//         style={{borderWidth: 1, padding: 10, marginVertical: 10}}
//         placeholder="Enter new id"
//         value={newId}
//         onChangeText={setNewId}
//       />
//       <Text>email: {email}</Text>
//       <TextInput
//         style={{borderWidth: 1, padding: 10, marginVertical: 10}}
//         placeholder="Enter new email"
//         value={newEmail}
//         onChangeText={setNewEmail}
//       />
//       <Text>password: {password}</Text>
//       <TextInput
//         style={{borderWidth: 1, padding: 10, marginVertical: 10}}
//         placeholder="Enter new password"
//         value={newPassword}
//         onChangeText={setNewPassword}
//       />
//       <Button title="Update" onPress={handleUpdate} />
//     </View>
//   );
// };

// export default Profile;

import React, {useContext, useState} from 'react';
import {View, Text, TextInput, Button, Image, StyleSheet} from 'react-native';
import {AppContext} from './AppContext';

const Profile = () => {
  const {username, updateUsername} = useContext(AppContext);
  const {id, updateId} = useContext(AppContext);
  const {email, updateEmail} = useContext(AppContext);
  const {password, updatePassword} = useContext(AppContext);

  const [newUsername, setNewUsername] = useState('');
  const [newId, setNewId] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleUpdate = () => {
    updateUsername(newUsername);
    setNewUsername('');
    updateId(newId);
    setNewId('');
    updateEmail(newEmail);
    setNewEmail('');
    updatePassword(newPassword);
    setNewPassword('');
  };

  // const handleUpdateId = () => {
  //   updateId(newId);
  //   setNewId('');
  // };

  return (
    <View>
      <Image
        style={{
          width: 100,
          height: 100,
          marginLeft: 95,
          borderRadius: 100,
        }}
        source={{
          uri: 'https://i.pinimg.com/236x/cb/24/f1/cb24f1478772b27702ff45e5490b6b6f.jpg',
        }}
      />
      <Button title="Change Avatar" />
      <Text style={{marginTop: 20}}>name</Text>
      <TextInput
        style={{borderWidth: 1, padding: 10, marginVertical: 10, width: 300}}
        placeholder="Enter new username"
        value={newUsername}
        onChangeText={setNewUsername}
      />
      {/* <Button title="Update Username" onPress={handleUpdateId} /> */}
      <Text>email</Text>
      <TextInput
        style={{borderWidth: 1, padding: 10, marginVertical: 10}}
        placeholder="Enter new email"
        value={newEmail}
        onChangeText={setNewEmail}
      />
      <Text>bio</Text>
      <TextInput
        style={{borderWidth: 1, padding: 10, marginVertical: 10}}
        placeholder="Enter new bio"
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <Button style={styles.btn} title="Submit" onPress={handleUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'blue',
  },
});

export default Profile;
