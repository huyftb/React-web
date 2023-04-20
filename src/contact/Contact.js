import React, { useState } from 'react';
import { Select, Textarea,Switch, TextInput } from 'react-materialize';
import '../contact/Contact.css';
// import EditIcon from '@mui/icons-material/Edit';
import { Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import { useFormik } from 'formik';
import { TextFields } from '@material-ui/icons';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, InputLabel,  Typography } from '@mui/material';
import * as Yup from 'yup';


const useStyles = makeStyles((theme) => ({
  container: {
        // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },

  }));


export default function Contact() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
 setOpen(false);
    };
  const formik = useFormik({
    initialValues:{
        name:"",
        email:"",
        phone:"",
        program:0,
        message:"",
        agree:false
},
// onSubmit: (values) => {
//   const jsonString = JSON.stringify(formik.values);
//   console.log(jsonString);
//   alert(jsonString);
// },
// onSubmit: (values)=>{alert("success")},
onSubmit: (values)=>{alert(JSON.stringify(formik.values))},
validationSchema: Yup.object({
    name: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
    email: Yup.string().required("Required.").email("Invalid email"),
    phone: Yup.number().integer().typeError("Please enter a valid number"),
    program: Yup.number().integer().typeError("Please select a program."),
    message: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
    agree: Yup.boolean().oneOf([true], "The terms and conditions must be accepted.")
}),
// validationSchema: Yup.object({
//   name: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
//   email: Yup.string().required("Required.").email("Invalid email"),
//   phone: Yup.string().matches(/^[0-9]*$/, "Please enter a valid number"),
//   program: Yup.number().integer().typeError("Please select a program."),
//   message: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
//   agree: Yup.boolean().oneOf([true], "The terms and conditions must be accepted.")
// }),

});

  const classes = useStyles();
  // const handleSubmit =(e)=> {
  //   e.preventDefault()
  // }

  return (
    <div id="result">
<form onSubmit={formik.handleSubmit}>
    <Container className={classes.container}>
      <h3>Contact us</h3>
      {/* <form onSubmit={formik.handleSubmit}> */}
        <TextInput id="TextInput-38" label="Name"
              name="name"
             value={formik.values.name}
              onChange={formik.handleChange}
/>
{formik.errors.name && (<Typography variant="caption" color="red">{formik.errors.name}</Typography>)}
        <TextInput id="TextInput-39" label="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
/>
{formik.errors.email && (<Typography variant="caption" color="red">{formik.errors.email}</Typography>)}
        <TextInput  id="TextInput-40" label="Phone"
              name="phone"
             value={formik.values.phone}
              onChange={formik.handleChange}
/>
{formik.errors.phone && (<Typography variant="caption" color="red">{formik.errors.phone}</Typography>)}
<FormControl sx={{ m: 1, minWidth: 600 }}>
{/* <InputLabel id="demo-simple-select-autowidth-label">Program of Study</InputLabel> */}
        <Select labelId="demo-simple-select-autowidth-label"
                   id="demo-simple-select-autowidth"
                   label="Program of Stydy"
                   name="program"
                   value={formik.values.program}
                    onChange={formik.handleChange}
                   multiple={false} >
              <option disabled value="0">
              Program of Study
              </option>
              <option value={1}>
              Software Engineering
              </option>
              <option value={2}>
              Information System
              </option>
              <option value={3}>
              Information Assurance
              </option>
              <option value={4}>
              Internet of Things
              </option>
              <option value={5}>
              Artificial Intelligence
              </option>
              <option value={6}>
              Digital Art & Design
              </option>
        </Select>
        {formik.errors.program && (<Typography variant="caption" color="red">{formik.errors.program}</Typography>)}
        </FormControl>
        <Textarea icon={<EditIcon />} id="outlined-multiline-static"
          label="Message"
          multiline
          name='message'
          rows={4}
          value={formik.values.message}
          onChange={formik.handleChange}
 />
 <FormControlLabel
  control={<Switch id="Switch-20" onChange={formik.handleChange}
  />}
  label="Agree to terms and conditions."
  name="agree"
  checked={formik.values.agree} // add checked property
  onChange={formik.handleChange} // use onChange instead of onClick
/> 
                {/* <FormControlLabel control={<Switch/>} label="  Agree to terms and conditions." name='agree' 
	value={formik.values.agree} onClick={formik.handleChange}  /> */}
  {formik.errors.agree && (<Typography variant="caption" color="red">{formik.errors.agree}</Typography>)}
  <br></br><br></br>
  <Button onClick={() => {
  setOpen(true);  }} style={{width:'100%', backgroundColor:'black', color: 'white'}}
            type='submit'>
             Send
            </Button>
            {/* <Button style={{backgroundColor: "#1976D2"}} size="small" type='submit' fullWidth>Send</Button> */}
     {/* </form> */}

     <Dialog
  open={open}
  onClose={handleClose}
  
>
  <DialogTitle style={{fontWeight:'bold'}}>
    Send successfully!
  </DialogTitle>
  <DialogContent>
    <DialogContentText>
      Name: {formik.values.name}<br></br>
      Email: {formik.values.email}<br></br>
      Phone: {formik.values.phone}<br></br>
      Message: {formik.values.message}
    </DialogContentText>
  </DialogContent>
  <DialogActions>
  <Button href='/' color="primary" autoFocus>
      Home
    </Button>
    <Button onClick={handleClose} color="primary" autoFocus>
      Close
    </Button>
   
  </DialogActions>
</Dialog>
    </Container>
    </form>
    </div>
  );
}

// import React from 'react';
// import { Select, Textarea, TextInput } from 'react-materialize';
// import '../contact/Contact.css';
// import { Container, Button } from '@material-ui/core';
// import EditIcon from '@material-ui/icons/Edit';
// import { makeStyles } from '@material-ui/core/styles';
// import { CenterFocusStrong } from '@material-ui/icons';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     paddingTop: theme.spacing(2),
//     paddingBottom: theme.spacing(2),
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     width: '100%',
//   },
//   input: {
//     margin: theme.spacing(1),
//   },
//   select: {
//     margin: theme.spacing(1),
//     width: '100%',
//   },
//   textarea: {
//     margin: theme.spacing(1),
//     width: '100%',
//   },
//   button: {
//     marginTop: theme.spacing(2),
//     backgroundColor: '#2196f3',
//     color: 'white',
//     '&:hover': {
//       backgroundColor: '#0d47a1',
//     },
//   },
// }));

// export default function Contact() {
//   const classes = useStyles();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // handle form submission here
//   };

//   return (
//     <Container className={classes.container}>
//       <h3>Contact us</h3>
//       <form onSubmit={handleSubmit} className={classes.form}>
//         <TextInput
//           id="TextInput-38"
//           label="Your Name"
//           className={classes.input}
//         />
//         <TextInput
//           id="TextInput-39"
//           label="Your Phone"
//           className={classes.input}
//         />
//         <TextInput
//           email
//           id="TextInput-41"
//           label="Email"
//           validate
//           className={classes.input}
//         />
//         <Select
//           id="Selecy-46"
//           multiple={false}
//           onChange={() => {}}
//           value=""
//           className={classes.select}
//           label="Choose your favourite nation"
//         >
//           <option disabled value="">
//             Choose your favourite nation
//           </option>
//           <option value="1">England</option>
//           <option value="2">France</option>
//           <option value="3">Spain</option>
//         </Select>
//         <Textarea
//           icon={<EditIcon />}
//           id="Textarea-28"
//           label="Your content"
//           className={classes.textarea}
//         />
//         <Button className={classes.button}>Submit</Button>
//       </form>
//     </Container>
//   );
// }
