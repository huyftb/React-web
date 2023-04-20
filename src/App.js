// import './App.scss';
import './App.css';
import Navigation from './components/navigation';
import Main from './components/Main';
import Footer from './components/footer';
import FilmsPresentation from './components/FilmsPresentation';
// import PlayersMap from './components/Players';
import Detail from './detail/Detail';
import Contact from './contact/Contact';
import About from './about/About';
import NewsPresent from './news/News';
import PlayersPresentation from './components/PlayersPresentation';
import {
  Routes,
  Route,
} from "react-router-dom";
import AddUser from './user/AddUser';
import User from './user/User';
import Users from './features/Users';
import { Col, Container, Row } from 'react-materialize';
import AddFilm from './addFilm/AddFilm';
import Protected from './components/Protected';
// import { Dashboard } from '@material-ui/icons';
import Login from './login/Login';
import { useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { useState } from 'react';
import Dashboard from './components/Dashboard';
import ListFilm from './CRUD/ListFilm';
import Edit from './CRUD/EditForm';
import EditForm from './CRUD/EditForm';
import UpdateNewsForm from './CRUD/EditForm';
import EditNews from './CRUD/EditForm';


// function App() {
//   return (
//     <div className="App">
//       <Navigation/>
//       {/* <h1>LIST OF PLAYERS</h1> */}
//       {/* <PlayersMap/> */}
      
//       {/* <Main/> */}
//       <PlayersPresentation/>
//       {/* <h1>LIST OF FILMS</h1> */}
//       {/* <FilmsPresentation/> */}
//       <Footer/>
//     </div>
//   )
// }

function App() {
  const [user, setUser] = useState({})
  const handleCredentialResponse = (response)=> {
    console.log("Encoded JWT ID token: " + response.credential);
    var decoded = jwt_decode(response.credential);
     setUser(decoded);
     document.getElementById('buttonDiv').hidden =true;
  }
  const handleLogOut =(e)=>{
    setUser({});
    document.getElementById('buttonDiv').hidden =false;
  }

  useEffect(() => {
    /* global google*/ 
    window.onload = function () {
      google.accounts.id.initialize({
        // client_id: "473949046085-r8vosu37dkjkhtofs1bg850eug0jhmd8.apps.googleusercontent.com",
        client_id: "365173240628-751kmk59rf2m482v8jf4ffqgd3v9ft1b.apps.googleusercontent.com",
        callback: handleCredentialResponse
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // customization attributes
      );
      google.accounts.id.prompt(); // also display the One Tap dialog
    }
  }, []);


  return (
    
    <div >
    
   
     
     
  {/* <Navigation/>
  <div id='buttonDiv'></div>
     {Object.keys(user).length!=0 &&
    <button onClick={handleLogOut}>logout</button>
   }
  {user && 
   <div>
   <h5>{user.name}</h5>
   </div>
   }
 */}
<Navigation>
  {Object.keys(user).length !== 0 &&
    <div>
      <h5>{user.name}</h5>
      <button onClick={handleLogOut}>logout</button>
    </div>
  }
</Navigation>
  

      
     {/* <div className="App">
  <Container>
    <Row>
      <Col xs={12} sm={4}>
        <AddUser />
      </Col>
      <Col xs={12} sm={8}>
        <User />
      </Col>
    </Row>
  </Container>

</div> */}
<Routes>
{/* <Route
 path="/edit/:id"
 render={({ match }) => (
 <UpdateNewsForm
 films={films.find((n) => n.id === match.params.id)}
 onUpdate={handleUpdate}
 onCancel={() => history.push("/dashboard")}
 />
 )}
/> */}

<Route path='/dashboard' element={<Protected><Dashboard/></Protected>}></Route>
{/* <Route path='/add' element={<Protected><AddFilm/></Protected>}></Route> */}
<Route path='/edit/:id' element={<Protected><EditNews/></Protected>}></Route> 
<Route path='/list' element={<ListFilm/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/' element={<FilmsPresentation/>}></Route>
<Route path='/add' element={<AddFilm/>}></Route>
      <Route path='/detail/:id' element={<Detail/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/news' element={<NewsPresent/>}></Route>
<Route path='/user' element={
  <Container>
    <Row>
      <Col xs={12} sm={4}>
        <AddUser />
      </Col>
      <Col xs={12} sm={8}>
        <User />
      </Col>
    </Row>
  </Container>

}></Route> 
        
      </Routes>

  
<Footer/>

    </div>
  )	;
}



export default App;
