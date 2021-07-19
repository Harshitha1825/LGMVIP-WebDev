import React, {useState} from 'react';
import './App.css';
import Cards from './MyComponents/cards';
//import {BounceLoader} from 'react-bootstrap';
import * as ReactBootStrap from 'react-bootstrap';

function App() {
  const [loading, setLoading] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [buttonClick, setButtonClick] = useState(false);
  const btnClick = async () => {
    try {
      setButtonClick(true);
      
      fetch('https://reqres.in/api/users?page=1')
        .then((response) => response.json())
        .then((json) => {
          setCardData(json.data);
        })

        setInterval(() => {
          setLoading(true);
        }, 1500);
        
      }
      catch(e){
        console.log(e)
      }
  };

  return (
    <>
      {/*---- Navbar Start ----*/}
      <nav className="navbar_section">
        <div className="top_main_footer">
            <h2 id="main_title">GET USERS GRID</h2>
            <button className="button" type="button" onClick={btnClick}>GET USERS</button>
        </div>
      </nav>
      {/*---- Navbar End ----*/}

      <div className='container'>
        <div className='row justify-content-center '>
          
          {buttonClick ? 
          (loading ? (<Cards cardData={cardData} />) : <ReactBootStrap.Spinner animation="border" /> )
            : ( <div className='main_footer'>CONTINUE WITH CLICKING 'GET USERS' BUTTON</div> )
          }
        </div>
      </div>
    </>
  );
}

export default App;