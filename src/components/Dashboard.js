import { CenterFocusStrong, Title } from '@material-ui/icons';
import { TableView } from '@mui/icons-material';
import { CardMedia, Dialog, DialogActions, DialogTitle, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react'
import { useState, useEffect } from "react";
import { Button, Table, TextInput } from 'react-materialize';
import { Link } from 'react-router-dom';

import ListFilm from '../CRUD/ListFilm';

export default function Dashboard() {
  const [filmsList, setFilmsList] = useState([]);
 const [showConfirmModal, setShowConfirmModal] = useState(false);
 const [deleteFilmId, setDeleteFilmId] = useState("");
 const [open, setOpen] = useState(false);
 const handleClose = () => {
  setOpen(false);
};
const [newTitle,setNewTitle]=useState('');
const [newImage,setNewImage]=useState('');
const [newNation,setNewNation]=useState('');
const [newYear,setNewYear]=useState('');
const [newInfo,setNewInfo]=useState('');
const [newClip,setNewClip]=useState('');

//  const history = useHis()
//  useEffect(() => {
//   async function fetchFilmsList() {
//   const response = await fetch("https://6413c3c9c469cff60d6a2978.mockapi.io/films");
//   const data = await response.json();
//   setFilmsList(data);
//   }
//   fetchFilmsList();
//   }, []);

const baseURL=`https://6415d1f8351c4aed491075d3.mockapi.io/product`;
    useEffect(() => {
        fetch(baseURL)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setFilmsList(data);
        })
        .catch((error) => console.log(error.message));
    }, []);


    
    // const handleDeleteFilms = async () => {
    //   const response = await fetch(`${baseURL}/${deleteFilmId}`, {
    //     method: "DELETE",
    //   });
    //   if (response.ok) {
    //     // setShowConfirmModal(false);
    //     setFilmsList((prevList) => prevList.filter((film) => film.id !== deleteFilmId));
    //     setDeleteFilmId("");
    //   }
    // };
    const handleDeleteFilms = async () => {
      try {
        const response = await fetch(`${baseURL}/${deleteFilmId}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        // Remove the deleted film from the state
        const updatedFilmsList = filmsList.filter((film) => film.id !== deleteFilmId);
        setFilmsList(updatedFilmsList);
        setOpen(false);
        setDeleteFilmId("");
      } catch (error) {
        console.error(error);
      }
    };

  return (
  <div>
 <div>
 <h3 >Dashboard</h3>

 <div>
 <TableContainer component={Paper}>
 <Table sx={{ minWidth: 700 }} aria-label="film-table">
 <TableHead>
 <TableRow style={{backgroundColor:'lightblue'}}>
 <th style={{width:"5%", textAlign:'center'}}>Id</th>
 <th style={{width:"10%", textAlign:'center'}}>Title</th>
  <th style={{width:"20%", textAlign:'center'}}>Image</th>
  <th style={{width:"10%", textAlign:'center'}}>Year - Nation</th>
  <th style={{width:"20%", textAlign:'center'}}>Information</th>
   <th style={{width:"25%", textAlign:'center'}}>Clip</th>
   <th style={{width:"10%", textAlign:'center'}}></th>
 </TableRow>
 </TableHead>
 <TableBody>
 {filmsList.map((film) => (
 <TableRow key={film.id}>
  <TableCell align='center' >
  {film.id}
 
 </TableCell>
 <TableCell align='center' >
  {film.title}
 
 </TableCell>
 <TableCell align="center" >
 <CardMedia component="img" height="240" image={film.image} alt={film.title}/>
  


 
   </TableCell>
   <TableCell align='center'>
 {`${film.year}-${film.nation}`}
 
   </TableCell>
   <TableCell  >
  {film.info} 
   </TableCell>
   <TableCell align='center'  >
{/* {film.clip}  */}
<p><iframe width="80%" height="200px"  src={film.clip} title={film.title} frameborder="0"
                allow="accelerometer; autoplay, clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/></p>
   </TableCell>

 <TableCell>
 {/* <button onClick={() => history.push(`/edit/${film.id}`)}>Edit</button> */}
 <Button onClick={() => {
  setOpen(true);
  setDeleteFilmId(film.id);
}}>Delete</Button><br></br><br></br>
 <Button><Link style={{color:'white'}} to={`/edit/${film.id}`}>Edit</Link></Button><br></br><br></br>
<Button><Link style={{color:'white'}} to={`/detail/${film.id}`}>Detail</Link></Button>
 </TableCell>
 </TableRow>
 ))}
 </TableBody>
 </Table>
 </TableContainer>
 </div>


 <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
 {open && (
 <div>
    <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this news article?"}</DialogTitle>
 {/* <p>Are you sure you want to delete this news article?</p> */}
 <DialogActions>
 <Button onClick={handleDeleteFilms}> Yes</Button>
 <Button onClick={() => {
  setOpen(false); 
  setDeleteFilmId("");
  }}>No</Button>
 </DialogActions>
 {/* <button onClick={handleDeleteFilms}>Yes</button>
 <button onClick={() => {
 setOpen(false);
 setDeleteFilmId("");
 }}>No</button> */}
 </div>
 )}
</Dialog>
 </div>
 
  {/* <ListFilm /> */}
  
  </div>
 );
} 
