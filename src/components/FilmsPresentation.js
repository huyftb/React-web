
// import React from 'react'
// import { data } from '../shared/ListOfFilms'
// import { Link } from 'react-router-dom'
// import { Icon, CardTitle, Row, Col, Card, Container } from 'react-materialize'
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import CloseIcon from '@mui/icons-material/Close';
// import { useEffect, useState } from 'react';

// export default function FilmsPresentation({ films }) {
//   console.log(films)
//   const [APIData, setAPIData]= useState([])
//   const baseURL=`https://640c4dd9a3e07380e8f11292.mockapi.io/films`;
  
  
//   const[film, setFilm] = useState([])

//   return (
//     // <Container>
//     //   <Row>
//     //     {data.map((film) => (
//     //       <Col s={12} m={3} key={film.id}>
//     //         <div className='card'>
//     //           <img src={film.img} alt=''/>
//     //           <h3>{film.title}</h3>
//     //           <p className='year'>{film.year}</p>
//     //           <p className='nation'>{film.nation}</p>
//     //           <Link to={`detail/${film.id}`}> 
//     //             <p><button>Detail</button></p>
//     //           </Link>
//     //         </div>
//     //       </Col>
//     //     ))}
//     //   </Row>
//     // </Container>
//     <Container>
//      <Row >
//        {data.map((film) => (
//        <Col key={film.id}>
//  <Card>
//     {/* <div class="card-image waves-effect waves-block waves-light"> */}
//     <div>
//       <img class="activator"  src={film.img} alt=''/>
//     </div>
//     <div class="card-content">
//       <span class="card-title activator grey-text text-darken">{film.title}<MoreVertIcon/></span> 
      
//  <p> <a href={`/detail/${film.id}`}>Detail</a></p>

//     </div>
//      {/* <div class="card-reveal"> */}

//       {/* <span class="card-title grey-text text-darken-4">{film.title}<CloseIcon/></span> */}
  
//       {/* <p>{film.year}</p>
//  <p>{film.nation}</p> 
//     </div> 
//      */}
//   </Card>
//        </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

import React, { useEffect, useState } from 'react';
import { data } from '../shared/ListOfFilms';
import { Link } from 'react-router-dom';
import { Icon, CardTitle, Row, Col, Card, Container, Button } from 'react-materialize';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import { CardContent, CardMedia, Typography, CardActions, Grid } from '@mui/material';

export default function FilmsPresentation({ films }) {
  console.log(films);
  const [APIData, setAPIData] = useState([]);
  const baseURL = 'https://6415d1f8351c4aed491075d3.mockapi.io/product';

  useEffect(() => {
    fetch(baseURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAPIData(data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <Container>
      <div className="row justify-content-center">
        <Grid container spacing={4}>
          {APIData.map((data) => (
            <Grid item xs={12} sm={6} md={4} key={data.id} className="col-md-4">
          <Card>
            <div className="row justify-content-center">
              <CardMedia component="img" height="240" image={data.image} alt={data.name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Rate: {data.rating} <br/>
                  Price: {data.price}


                </Typography>
              </CardContent>
            
              <CardActions className="d-flex justify-content-center">
                {/* <Button size="small">{data.nation}</Button> */}
                <Link to={`/detail/${data.id}`}>
              
    <Button size="small" style={{backgroundColor: "#1976D2"}}>
      Detail
    </Button>

  </Link>
              </CardActions>   
            </div>
            {/* <div class="card-content">
              <span class="card-title activator grey-text text-darken">
                {data.title}
                <MoreVertIcon />
              </span> */}
              {/* <p>
                <a href={`/detail/${data.id}`}>Detail</a>
              </p> */}
            {/* </div> */}
          </Card>
          </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

//-------------------
/*
export default function FilmsPresentation(films) {
    console.log(films)
    // const[film, setFilm] = useState
     return (
      <div className='container'>
      {Films.map((film)=> (
       <div className='column' >
       <div className='card' >
     
       <img src={film.img} alt=''/>
         <h3>{film.title}</h3>
         <p className='year'>{film.year}</p>
         <p className='nation'>{film.nation}</p>
         

    </div>
</div>
      
      ))}
</div>
  )
}
*/
/*
export default function FilmsPresentation(films) {
  console.log(films)
  const[film, setFilm] = useState([])
return (
  <div className='container'>
  {data.map((film)=> (
   <div className='column' key={film.id}>
   <div className='card' >
   <img src={film.img} alt=''/>
     <h3>{film.title}</h3>
     <p className='year'>{film.year}</p>
         <p className='nation'>{film.nation}</p>
//      {/* <button onClick={()=>{setFilm(film)}} >
// <a href='#popup1' id='openPopUp'>Detail</a>
// </button>

//    </div>
//  </div>    
//   ))}
//   <div id='popup1' className='overplay'>
//     <div className='popup'>
//     <img src={film.img} alt=''/>
//       <h2>{film.title}</h2>
//       <a className='close' href='#'>&times;</a>
//       <div className='content'>
//         {film.info}
//       </div>
//     </div> 
//      </div>
// </div>
{/* <Link to={`detail/${film.id}`}> 
         <p><button>Detail</button></p>
         </Link>
       </div>
     </div>    
      ))}
</div>
 

)
}*/
//-----------
