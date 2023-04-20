// import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// import React, { useEffect, useState } from 'react'
// import { Button, Table, TextInput } from 'react-materialize';
// import { useParams } from 'react-router-dom';

// export default function EditForm() {
//     const [filmsList, setFilmsList] = useState([]);
//     const { id } = useParams();
   
//     const [updateFilmId, setUpdateFilmId] = useState("");
//  const [open, setOpen] = useState(false);
//  const handleClose = () => {
//   setOpen(false);
// };
// const [title,setNewTitle]=useState('');
// const [image,setNewImage]=useState('');
// const [nation,setNewNation]=useState('');
// const [year,setNewYear]=useState('');
// const [info,setNewInfo]=useState('');
// const [clip,setNewClip]=useState('');
// const [errors, setErrors] = useState([]);
// // const baseURL=`https://640c4dd9a3e07380e8f11292.mockapi.io/films`;
// // useEffect(() => {
// //     fetch(`https://640c4dd9a3e07380e8f11292.mockapi.io/films/${id}`)
// //     .then((response) => response.json())
// //     .then((data) => {
// //         setNewTitle(data.title);
// //         setNewImage(data.image);
// //         setNewNation(data.nation);
// //         setNewYear(data.year);
// //         setNewInfo(data.info);
// //         setNewClip(data.clip);
    
// //     })
// //     .catch((error) => console.error(error));
// //     }, [id]);
// //     const handleSubmit = (event) => {
// //         event.preventDefault();
// //         const errors = validateForm();
// //         if (errors.length > 0) {
// //         setErrors(errors);
// //         return;
// //         }
//         // const baseURL=`https://640c4dd9a3e07380e8f11292.mockapi.io/films`;
//         // useEffect(() => {
//         //     fetch(baseURL)
//         //     .then((response) => {
//         //       if (!response.ok) {
//         //         throw new Error(`HTTP Status: ${response.status}`);
//         //       }
//         //       return response.json();
//         //     })
//         //     .then((data) => {
//         //       setFilmsList(data);
//         //     })
//         //     .catch((error) => console.log(error.message));
//         // }, []);
    
    
        
//         // const handleDeleteFilms = async () => {
//         //   const response = await fetch(`${baseURL}/${deleteFilmId}`, {
//         //     method: "DELETE",
//         //   });
//         //   if (response.ok) {
//         //     // setShowConfirmModal(false);
//         //     setFilmsList((prevList) => prevList.filter((film) => film.id !== deleteFilmId));
//         //     setDeleteFilmId("");
//         //   }
//         // };


//         // const handleEditFilms = async () => {
//         //   try {
//         //     const response = await fetch(`${baseURL}/${updateFilmId}`, {
//         //       method: "PUT",
//         //     });
//         //     if (!response.ok) {
//         //       throw new Error(`HTTP Status: ${response.status}`);
//         //     }
//         //     // Remove the deleted film from the state
//         //     const updatedFilmsList = filmsList.filter((film) => film.id !== updateFilmId);
//         //     setFilmsList(updatedFilmsList);
//         //     setOpen(false);
//         //     setDeleteFilmId("");
//         //   } catch (error) {
//         //     console.error(error);
//         //   }
//         // };
    
//         // const updatedFilms = {
//         //     title,
//         //     image,
//         //     nation,
//         //     year,
//         //     info,
//         //     clip,
           
//         //     };
//         //     onUpdate(updatedFilms);
//         //   };
//         //   fetch(`https://640c4dd9a3e07380e8f11292.mockapi.io/films/${id}`, {
//         //     method: 'PUT',
//         //     headers: { 'Content-Type': 'application/json' },
//         //     body: JSON.stringify(updatedFilms),
//         //     })
//         //     .then((response) => {
//         //     if (response.ok) {
//         //     setErrors([]);
//         //     alert('News updated successfully!');
//         //     window.location.href = '/dashboard';
//         //     } else {
//         //     throw new Error('Failed to update news');
//         //     }
//         //     })
//         //     .catch((error) => console.error(error));
           

//                 // const validateForm = () => {
//                 //     const errors = [];
//                 //     if (title === '') {
//                 //     errors.push('Title is required');
//                 //     }
//                 //     if (description === '') {
//                 //     errors.push('Description is required');
//                 //     }
//                 //     if (content === '') {
//                 //     errors.push('Content is required');
//                 //     }
//                 //     if (img === '') {
//                 //     errors.push('Image is required');
//                 //     }
//                 //     if (isNaN(parseInt(views)) || views < 1) {
//                 //     errors.push('Views must be a number greater than 0') }};

//   return (
//     <div>
//     <div>
//     <label htmlFor="title">Title</label>
//     <input
//     type="text"
//     id="title"
//     value={title}
//     onChange={(e) => setNewTitle(e.target.value)}
//     required
//     />
//      </div>
//  <div>
//  <label htmlFor="image">Image URL</label>
//  <textarea
//  id="image"
//  value={image}
//  onChange={(e) => setNewImage(e.target.value)}
//  required
//  />
//  </div>
//  <div>
//  <label htmlFor="year">Year</label>
//  <textarea
//  id="year"
//  value={year}
//  onChange={(e) => setNewYear(e.target.value)}
//  required
//  />
//  </div>
//  <div>
//  <label htmlFor="nation">Nation</label>
//  <input
//  type="text"
//  id="nation"
//  value={nation}
//  onChange={(e) => setNewNation(e.target.value)}
//  required
//  />
//  </div>
//  <div>
//  <label htmlFor="info">Info</label>
//  <input
//  type="text"
//  id="info"
//  value={info}
//  onChange={(e) => setNewInfo(e.target.value)}
//  required
//  />
//  </div>
//  <div>
//  <label htmlFor="clip">Video</label>
//  <input
//  type="text"
//  id="clip"
//  checked={clip}
//  onChange={(e) => setNewClip(e.target.checked)}
//  />
//  </div>
 
//  <div>
//  <button type="submit">Update</button>
//  {/* <button type="button" onClick={onCancel}>
//  Cancel
//  </button> */}
//  </div>
//  </div>
//  );
//   }




// // import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// // import React, { useEffect, useState } from 'react'
// // import { Button, Container, Table, TextInput } from 'react-materialize';
// // import { useParams } from 'react-router-dom';
// // import { useFormik } from 'formik';
// // import * as Yup from 'yup';
// // import { useDispatch } from 'react-redux';

// // export default function Edit() {
// //     const [filmsList, setFilmsList] = useState([]);
// //     const { id } = useParams();

// //  const [open, setOpen] = useState(false);
// //  const handleClose = () => {
// //   setOpen(false);
// // };
// // const [title,setNewTitle]=useState('');
// // const [image,setNewImage]=useState('');
// // const [nation,setNewNation]=useState('');
// // const [year,setNewYear]=useState('');
// // const [info,setNewInfo]=useState('');
// // const [clip,setNewClip]=useState('');
// // const [errors, setErrors] = useState([]);

// // const dispatch = useDispatch();

// // const baseURL=`https://640c4dd9a3e07380e8f11292.mockapi.io/films`;
// // useEffect(() => {
// //     fetch(`https://640c4dd9a3e07380e8f11292.mockapi.io/films/${id}`)
// //     .then((response) => response.json())
// //     .then((data) => {
// //         setNewTitle(data.title);
// //         setNewImage(data.image);
// //         setNewNation(data.nation);
// //         setNewYear(data.year);
// //         setNewInfo(data.info);
// //         setNewClip(data.clip);
    
// //     })
// //     .catch((error) => console.error(error));
// //     }, [id]);
// //     // const handleSubmit = (event) => {
// //     //     event.preventDefault();
// //     //     const errors = validateForm();
// //     //     if (errors.length > 0) {
// //     //     setErrors(errors);
// //     //     return;
// //     //     }

// //         const formik = useFormik({
// //             initialValues:{
// //                 title,
// //                 image,
// //                 nation,
// //                 year,
// //             info,
// //             clip,
// //         },
// //         onSubmit: (values)=>{
// //             fetch(`https://640c4dd9a3e07380e8f11292.mockapi.io/films/${id}`, {
// //                 method: 'PUT',
// //                 headers: {
// //                     'Content-Type': 'application/json'
// //                     },
// //                     credentials: 'same-origin'
// //                     }).then(response =>{
// //                       if(!response.ok){
// //                           throw new Error(`HTTP Status: ${response.status}`)
// //                       }
// //                       return response.json()
// //                     })            
// //                     .then(UsersData => setOpen(true))
// //                     .catch(error => console.log(error.message));
// //                 },

// //                 validationSchema: Yup.object({
// //                     image: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
// //                     title: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
// //                     year: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
// //                     nation: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
// //                     info: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
// //                     clip: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
// //                     // agree: Yup.boolean().oneOf([true], "The terms and conditions must be accepted.")
// //                 }),
// //                 });




// //   return (
// //     <Container>
// //     <form onSubmit={formik.handleSubmit}>
// //     <TableContainer component={Paper}>
// //     <Table sx={{ minWidth: 700 }} aria-label="update table">
// //     <TableHead>
// //     <TableRow>
// //     <th>Title</th>
// //      <th>Image</th>
// //      <th>Year - Nation</th>
// //      {/* <th>Nation</th> */}
// //      <th>Information</th>
// //       <th>Clip</th>
// //     </TableRow>
// //     </TableHead>
// //     <TableBody>

// //     <TableRow>
// //     <TableCell align="center" >
// //     <TextInput placeholder={title}
// //     onChange={(e) => setNewTitle(e.target.value)}/>
// //     </TableCell>
// //     <TableCell align="center" >
// //      <TextInput placeholder={image}
// //     onChange={(e) => setNewTitle(e.target.value)}/>
// //       </TableCell>
// //       <TableCell align="center" >
// //      <TextInput placeholder={`${year}-${nation}`}
// //     onChange={(e) => setNewTitle(e.target.value)}/>
// //       </TableCell>
// //       <TableCell align="center" >
// //      <TextInput placeholder={info} 
// //     onChange={(e) => setNewTitle(e.target.value)}/>
// //       </TableCell>
// //       <TableCell align="center" >
// //      <TextInput placeholder={clip} 
// //     onChange={(e) => setNewTitle(e.target.value)}/>
// //       </TableCell>
   
// //     <TableCell>
// //     {/* <button onClick={() => history.push(`/edit/${film.id}`)}>Edit</button> */}
// //     <Button onClick={() => {
// //      setOpen(true);
// //     //  setDeleteFilmId(film.id);
// //    }}>Update</Button>
// //     </TableCell>
// //     </TableRow>
  
// //     </TableBody>
// //     </Table>
// //     </TableContainer>
// //     </form>
// //     </Container>
// //    );
// // }



// import React, { useState } from "react";
// const UpdateNewsForm = ({ news, onUpdate, onCancel }) => {
//     // Use the news prop to initialize state
//     const [title,setNewTitle]=useState(news.title);
//     const [image,setNewImage]=useState(news.image);
//     const [nation,setNewNation]=useState(news.nation);
//     const [year,setNewYear]=useState(news.year);
//     const [info,setNewInfo]=useState(news.info);
//     const [clip,setNewClip]=useState(news.clip);
//  const handleSubmit = (e) => {
//  e.preventDefault();
//  const updatedNews = {
//  id: news.id,
//  title,
//  image,
//  nation,
//  year,
//  info,
//  clip,
//  };
//  onUpdate(updatedNews);
//  };
//  return (
//  <form onSubmit={handleSubmit}>
//  <div>
//  <label htmlFor="title">Title</label>
//  <input
//  type="text"
//  id="title"
//  value={title}
//  onChange={(e) => setNewTitle(e.target.value)}
//  required
//  />
//  </div>
//  <div>
//  <label htmlFor="image">Image</label>
//  <textarea
//  id="image"
//  value={image}
//  onChange={(e) => setNewImage(e.target.value)}
//  required
//  />
//  </div>
//  <div>
//  <label htmlFor="nation">Nation</label>
//  <textarea
//  id="nation"
//  value={nation}
//  onChange={(e) => setNewNation(e.target.value)}
//  required
//  />
//  </div>
//  <div>
//  <label htmlFor="year">Year</label>
//  <input
//  type="text"
//  id="year"
//  value={year}
//  onChange={(e) => setNewYear(e.target.value)}
//  required
//  />
//  </div>
//  <div>
//  <label htmlFor="info">Info</label>
//  <input
//  type="text"
//  id="info"
//  value={info}
//  onChange={(e) => setNewInfo(e.target.value)}
//  required
//  />
//  </div>
//  <div>
//  <label htmlFor="clip">Video</label>
//  <input
//  type="text"
//  id="clip"
//  checked={clip}
//  onChange={(e) => setNewClip(e.target.checked)}
//  />
//  </div>
 
//  <div>
//  <button type="submit">Update</button>
//  <button type="button" onClick={onCancel}>
//  Cancel
//  </button>
//  </div>
//  </form>
//  );
// };

// export default UpdateNewsForm;


import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditNews = () => {
  const[filmList, serFilmList] = useState('');
  const [title, setNewTitle] = useState('');
  const [image, setNewImage] = useState('');
  const [nation, setNewNation] = useState('');
  const [year, setNewYear] = useState('');
  const [info, setNewInfo] = useState('');
  const [clip, setNewClip] = useState('');
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   axios
  //     .get(`https://640c4dd9a3e07380e8f11292.mockapi.io/films/${id}`, {
  //       headers: {
  //         "Content-Encoding": "gzip",
  //         "Transfer-Encoding": "chunked"
  //       }
  //     })
  //     .then((response) => {
  //       const data = response.data;
  //       setNewTitle(data.title);
  //       setNewImage(data.image);
  //       setNewNation(data.nation);
  //       setNewYear(data.year);
  //       setNewInfo(data.info);
  //       setNewClip(data.clip);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setError('Unable to fetch news item.');
  //     });
  // }, [id]);

  const baseURL=`https://6415d1f8351c4aed491075d3.mockapi.io/product`;
  useEffect(() => {
      fetch('${baseURL}/${id}')
      .then((response) => {

        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        serFilmList(data);
      })
      .catch((error) => {
              console.log(error);
              setError('Unable to fetch news item.');
            });
          }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedNews = {
      title,
      image,
      nation,
      year,
      info,
      clip,
    };
    axios
      .put(`https://6415d1f8351c4aed491075d3.mockapi.io/product/${id}`, updatedNews)
      .then((response) => {
        navigate('/dashboard');
      })
      .catch((error) => {
        console.log(error);
        setError('Unable to update news item.');
      });
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            value={image}
            onChange={(e) => setNewImage(e.target.value)}
          />
        </label>
        <label>
          Nation:
          <input
            type="text"
            value={nation}
            onChange={(e) => setNewNation(e.target.value)}
          />
        </label>
        <label>
          Year:
          <input
            type="text"
            value={year}
            onChange={(e) => setNewYear(e.target.value)}
          />
        </label>
        <label>
          Info:
          <input
            type="text"
            value={info}
            onChange={(e) => setNewInfo(e.target.value)}
          />
        </label>
        <label>
          Clip:
          <input
            type="text"
            value={clip}
            onChange={(e) => setNewClip(e.target.value)}
          />
</label>
  <div>
 <button type="submit">Update</button>



 </div>
</form>
</div>
 );
}
export default EditNews;