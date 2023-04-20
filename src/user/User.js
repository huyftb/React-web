// // import React, { useState } from 'react';
// // import { Col, Container, Row } from 'react-materialize';
// // import UsersData from '../shared/ListOfUsers';

// // export default function User() {
// //   const[user, setUser] = useState([]);
// //   return (
// //     <Container>
// //     <Row >
// //       {UsersData.map((user) => (
// //       <Col key={user.id}>
     
// //       </Col>
// //        ))}
// //      </Row>
// //    </Container>
// //  );
// // }
// import UsersData from '../shared/ListOfUsers';
// import { useState } from 'react';
// import { useSelector } from "react-redux";
// import { useDispatch } from 'react-redux';
// import { deleteUser, updateUsername } from '../features/Users';

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { Button, Row, TextInput } from 'react-materialize';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { IconButton, ListItem, ListItemText, TextField } from '@mui/material';

// export default function User() {
//   const dispatch = useDispatch();
// const userList = useSelector((state)=> state.users.value);  
// const [newUsername,setNewUsername]=useState('');

// return (
//   <>
//     {UsersData.map((user) => {
//       return (
//         <ListItem key={user.id}>
//           <ListItemText align='center' primary={user.name} secondary={user.username} />
//           <TextInput 
//             placeholder='Type new username...'
//             onChange={(e) => setNewUsername(e.target.value)}
//           />
//           <Button  
//             onClick={() => {
//               dispatch(updateUsername({ id: user.id, username: newUsername }));
//             }}
//           >
//             Update
//           </Button>
//           <IconButton aria-label="delete" color="error"
//             onClick={() => {
//               dispatch(deleteUser({ id: user.id }));
//             }}
//           >
//             <DeleteIcon />
//           </IconButton>
//         </ListItem>
//       );
//     })}
//   </>
// );
// }

import UsersData from '../shared/ListOfUsers';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { deleteUser, updateUsername } from '../features/Users';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Row, TextInput } from 'react-materialize';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton, ListItem, ListItemText, TextField } from '@mui/material';

export default function User() {
  const dispatch = useDispatch();
  const userList = useSelector((state)=> state.users.value);  
  const [newUsername,setNewUsername]=useState('');

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="user table">
       
        <TableBody>
          {userList.map((user) => (
            <TableRow key={user.id}>
              <TableCell align="center"><AccountCircleIcon /></TableCell>
              <TableCell component="th" scope="row">{user.name} <div style={{color:'gray'}}>{user.username}</div> </TableCell>
              <TableCell align="center">
               
                <TextInput 
                  placeholder='Type new username...'
                  onChange={(e) => setNewUsername(e.target.value)}
                />
              </TableCell>
              <TableCell align="center">
                <Button style={{backgroundColor:'#ee6e73'}}
                  onClick={() => {
                    dispatch(updateUsername({ id: user.id, username: newUsername }));
                    setNewUsername('');
                  }}
                >
                  Update
                </Button>
                <IconButton aria-label="delete" color="error"
                  onClick={() => {
                    dispatch(deleteUser({ id: user.id }));
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
