import React, { useState } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Users, { addUser, userSlice } from '../features/Users';
import { useDispatch } from 'react-redux';
import UsersData from '../shared/ListOfUsers';
import { Alert, AlertTitle, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Textarea, Switch, Container, TextInput } from 'react-materialize';

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

export default function AddFilm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [image, setImage] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [nation, setNation] = React.useState('');
  const [year, setYear] = React.useState('');
  const [clip, setClip] = React.useState('');
  const [info, setInfo] = React.useState('');
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

    const baseUrl=`https://6415d1f8351c4aed491075d3.mockapi.io/product`;
  const formik = useFormik({
    initialValues:{
      image:"",
      name:"",
      year:"",
      nation:"",
      info:"",
      clip:"",
    // agree:false
},
onSubmit: (values)=>{
    fetch(baseUrl, {  method: 'POST',
    body: JSON.stringify(values),  headers: {
    'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
    }).then(response =>{
      if(!response.ok){
          throw new Error(`HTTP Status: ${response.status}`)
      }
      return response.json()
    })            
    .then(UsersData => setOpen(true))
    .catch(error => console.log(error.message));
},

validationSchema: Yup.object({
    image: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
    title: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
    year: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
    nation: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
    info: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
    clip: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
    agree: Yup.boolean().oneOf([true], "The terms and conditions must be accepted.")
}),
});

  

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const id = Math.floor(Math.random() * 1000); // generate a random id
  //   dispatch(AddFilm({ id, image, title, year, nation, info, clip})); 
  //   setImage('');
  //   setTitle('');
  //   setYear('');
  //   setNation('');
  //   setInfo('');
  //   setClip('');
  // };

  return (
    // <form className={classes.form} onSubmit={handleSubmit}>
    // <form onSubmit={handleSubmit}>
      <Container>
        <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6}>
          
          <TextInput
            // margin="normal"
            name="image"
            label="URL of image"
            type="text"
            // fullWidth
            // variant="outlined"
            value={formik.values.image}
            onChange={formik.handleChange}
          />
          {formik.errors.image && (<Typography variant="caption" color="red">{formik.errors.image}</Typography>)}
          <TextInput
            // margin="dense"
            name="title"
            label="Title"
            type="text"
            // fullWidth
            // variant="outlined"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          {formik.errors.title && (<Typography variant="caption" color="red">{formik.errors.title}</Typography>)}
          <TextInput
            // margin="dense"
            name="year"
            label="Year"
            type="text"
            // fullWidth
            // variant="outlined"
            value={formik.values.year}
            onChange={formik.handleChange}
          />
          {formik.errors.year && (<Typography variant="caption" color="red">{formik.errors.year}</Typography>)}
          <TextInput
            // margin="dense"
            name="nation"
            label="Nation"
            type="text"
            // fullWidth
            // variant="outlined"
            value={formik.values.nation}
            onChange={formik.handleChange}
          />
          {formik.errors.nation && (<Typography variant="caption" color="red">{formik.errors.nation}</Typography>)}
          <TextInput
            // margin="dense"
            name="info"
            label="Information"
            type="text"
            // fullWidth
            // variant="outlined"
            value={formik.values.info}
            onChange={formik.handleChange}
          />
          {formik.errors.info && (<Typography variant="caption" color="red">{formik.errors.info}</Typography>)}
          <TextInput
            // margin="dense"
            name="clip"
            label="URL of trailer"
            type="text"
            // fullWidth
            // variant="outlined"
            value={formik.values.clip}
            onChange={formik.handleChange}
          />
          {formik.errors.clip && (<Typography variant="caption" color="red">{formik.errors.clip}</Typography>)}
          {/* <br></br><Grid item xs={12} sm={6}>
          <FormControlLabel control={<Switch/>}
           label="Top Films" name='agree'/> 
        </Grid>
        {formik.errors.agree && (<Typography variant="caption" color="red">{formik.errors.agree}</Typography>)} */}
        <br></br><Grid item xs={12} >
          <Button  style={{backgroundColor: "#1976D2"}} size="small" type='submit' fullWidth>Add</Button>
          
        </Grid> 

        {/* <Button onClick={() => {
  setOpen(true);
  // setDeleteFilmId(film.id);
}}>Add</Button> */}

        </Grid>
        
        
      </Grid>
      {/* <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Congratulations"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Alert severity="success">
              <AlertTitle>Adding successful!</AlertTitle>
            </Alert>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button><Link to='/dashboard' style={{textDecoration:"none"}}>Dashboard</Link></Button>
          <Button autoFocus onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog> */}
      <Dialog
  open={open}
  onClose={handleClose}
  
>
  <DialogTitle>
    Success!
  </DialogTitle>
  <DialogContent>
    <DialogContentText>
      Your film has been added successfully.
    </DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose} color="primary" autoFocus>
      Close
    </Button>
    <Button href='/dashboard' color="primary" autoFocus>
      Dashboard
    </Button>
  </DialogActions>
</Dialog>
      </form>
      </Container>
    // </form>
  );
}
