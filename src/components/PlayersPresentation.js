import React, { useState } from 'react'
import { data } from '../shared/ListOfPlayers'
import { Link } from 'react-router-dom'


export default function PlayersPresentation(players) {
    console.log(players)
    const[player, setPlayer] = useState([])
  return (
    <div className='container'>
    {data.map((player)=> (
     <div className='column' key={player.id}>
     <div className='card' >
     <img src={player.img} alt=''/>
       <h3>{player.name}</h3>
       <p className='title'>{player.club}</p>
       {/* <button onClick={()=>{setPlayer(player)}} >
<a href='#popup1' id='openPopUp'>Detail</a>
</button>

     </div>
   </div>    
    ))}
    <div id='popup1' className='overplay'>
      <div className='popup'>
      <img src={player.img} alt=''/>
        <h2>{player.name}</h2>
        <a className='close' href='#'>&times;</a>
        <div className='content'>
          {player.info}
        </div>
      </div>

    </div>
</div>

)
} */}
<Link to={`detail/${player.id}`}> 
         <p><button>Detail</button></p>
         </Link>
       </div>
     </div>    
      ))}
</div>
  )
}