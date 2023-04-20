import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../shared/ListOfFilms';
import '../detail/Detail.css';
import { Card, Row } from 'react-materialize';
import { CardContent, CardMedia } from '@mui/material';
import { useState } from 'react';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ModalCase from './ModalCase';

  
export default function Detail() {
  const [isOpen, setIsOpen] = useState(false);
  const userName = useParams();
  const film = data.find(obj => {
    return obj.id == userName.id;
  });
    // let cost = film.cost.toLocaleString();
    
    return(
    //  <div className='container_detail'>
    <Row>
  {/* <div className='product-card'> */}
  <Card className="card-container">
     
     <CardMedia>
     <div className='product-tumb'>
         <img src={`../${film.img}`} alt=''/>
     
     <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
              <OndemandVideoIcon />
     </a>
     </div>
     </CardMedia>
     <CardContent>
     <div className='badge' style={{ backgroundColor:'#1e6ebf',color: '#fff',fontSize: '1.5rem',padding: '0.5rem'}}>{film.title}</div>
     </CardContent>
     <div className='product-details'>
         {/* <h4>{player.club}</h4> */}
           <div className='product-year' style={{fontSize: '1.5rem'}}>{film.year} - {film.nation}</div>
           <p style={{fontSize: '1.5rem'}}>{film.info}</p>
          
           {/* <div className='product-bottom-details'></div> */}
     </div>
  </Card>
  {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
</Row>
    )
    }

