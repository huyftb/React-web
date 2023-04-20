import React from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Users, { addUser, userSlice } from '../features/Users';
import { useDispatch } from 'react-redux';
import UsersData from '../shared/ListOfUsers';
import { Alert, AlertTitle, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Switch } from '@mui/material';
import { Link } from 'react-router-dom';

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
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [open, setOpen] = useState(false);
  const handleClose = () => {
 setOpen(false);
    };


  const formik = useFormik({
    initialValues:{
      image:"",
      title:"",
      year:"",
      nation:"",
      info:"",
      clip:"",
    top:false
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
    .then(data => setOpen(true))
    .catch(error => console.log(error.message));
},

validationSchema: Yup.object({
    image: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
    title: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
    year: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
    nation: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
    info: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
    clip: Yup.string().required("Required.").min(10, "Must be 10 characters or more")
}),
});

  

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = Math.floor(Math.random() * 1000); // generate a random id
    dispatch(addUser({ id, name, username })); 
    setName('');
    setUsername('');
  };

  return (
    // <form className={classes.form} onSubmit={handleSubmit}>
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2} justifyContent="center">
        {/* <Grid item xs={12} sm={6}> */}
        <TextField
            autoFocus
            margin="dense"
            name="image"
            label="URL of image"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.image}
              onChange={formik.handleChange}
           />
          {formik.errors.name && (<Typography variant="caption" color="red">{formik.errors.image}</Typography>)}
        {/* </Grid> */}
        {/* <Grid item xs={12} sm={6}> */}
        <TextField
            autoFocus
            margin="dense"
            name="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.title}
              onChange={formik.handleChange}
           />
                     {formik.errors.name && (<Typography variant="caption" color="red">{formik.errors.title}</Typography>)}
           <TextField
            autoFocus
            margin="dense"
            name="year"
            label="Year"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.year}
              onChange={formik.handleChange}
           />
                     {formik.errors.name && (<Typography variant="caption" color="red">{formik.errors.year}</Typography>)}
           <TextField
            autoFocus
            margin="dense"
            name="nation"
            label="Nation"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.nation}
              onChange={formik.handleChange}
           />
                     {formik.errors.name && (<Typography variant="caption" color="red">{formik.errors.nation}</Typography>)}
               <TextField
            autoFocus
            margin="dense"
            name="info"
            label="Info"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.info}
              onChange={formik.handleChange}
           />
                     {formik.errors.name && (<Typography variant="caption" color="red">{formik.errors.info}</Typography>)}
               <TextField
            autoFocus
            margin="dense"
            name="clip"
            label="Clip"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.clip}
              onChange={formik.handleChange}
           />
                     {formik.errors.name && (<Typography variant="caption" color="red">{formik.errors.clip}</Typography>)}
        {/* </Grid> */}
      </Grid>
      <FormControlLabel control={<Switch/>}
          label="Top films" name='agree' 
            />
            <br />
          <Button variant="contained" size="small"  type='submit'>Add</Button>
          <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"Congraturation"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
      <Alert severity="success">
  <AlertTitle>Adding successful!</AlertTitle>
</Alert>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button><Link to='/' style={{textDecoration:"none"}}>Dashboard</Link></Button>
      <Button autoFocus onClick={handleClose}>
       Close
      </Button>
    </DialogActions>
  </Dialog>

    </form>
  );
}
