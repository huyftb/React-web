
// functional components
import { Link } from 'react-router-dom'
import React from 'react'
import { data } from '../shared/ListOfPlayers'

export default function PlayersMap() {
    return (
      <div className='container'>
      {data.map((player)=> (
       <div className='column' >
       <div className='card' >
       <img src={player.img} alt=''/>
         <h3>{player.name}</h3>
         <p className='title'>{player.club}</p>
         <Link to={`detail/${player.id}`}> 
         <p><button>Detail</button></p>
         </Link>
       </div>
     </div>    
      ))}
</div>
  )
}



/*
import React from 'react'
import { Players } from '../shared/ListOfPlayers'

export default class Player extends Component {
  render() {
    return (
    <div className='container'>
           {Players.map((player)=> (
            <div className='column' >
            <div className='card' >
            <img src={player.img} alt=''/>
              <h3>{player.name}</h3>
              <p className='title'>{player.club}</p>
              <p><button>Detail</button></p>
            </div>
          </div>    
           ))}
    </div>
  )
}
}


/*
import React, { Component } from 'react'
export default class Players extends Component {
  render() {
    return (
      <div className='container'>

        <div className='con1'>
        <div className='column'>
            <div className='card'>
                <img src='access\images\cr.jpg'/>
                <h3>Cristiano Ronaldo</h3>
                <p className='title'>Manchester United</p>
                <p><button>Detail</button></p>
            </div>
        </div>

        <div className='column'>
            <div className='card'>
                <img src='access\images\kante.jpg'/>
                <h3>Kante</h3>
                <p className='title'>Chelsea</p>
                <p><button>Detail</button></p>
            </div>
        </div>

        <div className='column'>
            <div className='card'>
                <img src='access\images\messi.jpg'/>
                <h3>Messi</h3>
                <p className='title'>PSG</p>
                <p><button>Detail</button></p>
            </div>
        </div>
        </div>
        <div className='con2'>
        <div className='column'>
            <div className='card'>
                <img src='access\images\neymar.jpg'/>
                <h3>Neymar</h3>
                <p className='title'>PSG</p>
                <p><button>Detail</button></p>
            </div>
        </div>

        <div className='column'>
            <div className='card'>
                <img src='access\images\kane.jpg'/>
                <h3>Kane</h3>
                <p className='title'>Tottemham</p>
                <p><button>Detail</button></p>
            </div>
        </div>

        <div className='column'>
            <div className='card'>
                <img src='access\images\haaland.jpg'/>
                <h3>Haaland</h3>
                <p className='title'>Manchester City</p>
                <p><button>Detail</button></p>
            </div>
        </div>
      </div>
      </div>
    )
  }
}
*/