import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../shared/ListOfFilms';

export default function ModalCase({setIsOpen, film}) {
  // const userName = useParams();
  // const film = data.find(obj => {
  //   return obj.id == userName.id;
  // });
 
  return (
    <div className='modal-show' onClick={() => setIsOpen(false)}>
        <div id="modal1" classname="modal" style={{display: 'block', top:'35%'}}>
            <div className="modal-content">
                <h4>Video for {film.title}</h4>
                <p><iframe width="70%" height="550px"  src={film.clip} title={film.title} frameborder="0"
                allow="accelerometer; autoplay, clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/></p>
            </div>
            <div className="modeal-footer">
                <a className="modal-close red-text">Close</a>
            </div>
        </div>
    </div>
  )
}
