// import React from 'react';
// import { Select, Textarea, TextInput, Row, Col } from 'react-materialize';
// import '../user/AddUser.css';
// // import EditIcon from '@mui/icons-material/Edit';
// import { Container, Button } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import EditIcon from '@material-ui/icons/Edit';
// import { useState } from 'react';
// import { addUser } from '../features/Users';
// import { useDispatch } from 'react-redux';
// import { TextField } from '@mui/material';



// export default function AddUser() {
//   // const classes = useStyles();
//   const handleSubmit =(e)=> {
//     e.preventDefault()
//   }
//   const dispatch = useDispatch();
//   const [name, setName]=useState('');
//   const [username,setUsername]=useState('');
  
//   return (
//     <div >
     
//     <TextField
//               label="Name"
//               name="name"
//               value={name}
//               onChange={(event) => {setName(event.target.value);}}
//             />
//             <br></br>
//             <TextField
//              name="username"
//               label="Username"
//               value={username}
//               onChange={(event) => {setUsername(event.target.value);}}
//             /><br></br>
// 	<Button onClick={()=> {
//               dispatch(addUser({id: 0, name: name, username: username}));
//               }}
//               >
//              Add user
//             </Button>

//   </div>
//   );
// }
import '../user/User.css';
import React from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Users, { addUser, userSlice } from '../features/Users';
import { useDispatch } from 'react-redux';
import UsersData from '../shared/ListOfUsers';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
    // float:'left',
    marginLeft: theme.spacing(-20),
  },
  textField: {
    margin: theme.spacing(1),
    width: '100%',
  },
  button: {
    margin: theme.spacing(2),
    width: '100%',
    backgroundColor:'#ee6e73',
  },
}));

export default function AddUser() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
 

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = Math.floor(Math.random() * 1000); // generate a random id
    dispatch(addUser({ id, name, username })); 
    setName('');
    setUsername('');
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Grid container spacing={2} justifyContent="center">
        {/* <Grid item xs={12} sm={6}> */}
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={classes.textField}
            required
          />
        {/* </Grid> */}
        {/* <Grid item xs={12} sm={6}> */}
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className={classes.textField}
            required
          />
        {/* </Grid> */}
      </Grid>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Add User
      </Button>
    </form>
  );
}
