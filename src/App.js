import logo from './logo.svg';
import './App.css';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Rickandmorty from './Components/Rickandmorty';
import Showcase from './Components/Showcase';
import Footer from './Components/Footer';
import React ,{ useEffect, useState } from 'react';
const axios = require('axios');



function App() {


  const [arr,setArr] = useState([]);


  useEffect(()=>{

    axios.get('https://rickandmortyapi.com/api/character')
    .then(function (response) {
      // handle success
      setArr(response.data.results);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    
  },[])


  return (
    <div className="">
      <Header />
      <Rickandmorty />
      
      <div className="showcase_section">
        <div className="container">
          <div className="row">

            {

              arr.map((item,i) => {

                return (
                    
                  <div className="col-lg-6 col-md-6 col-12 g-3 " key={i}>
                  <div className="showcase_box1">
                      <div className="box_image">
                          <img src={item.image
                          } alt="" />
                      </div>
                      <div className="box_content">
                          <div className="kyle">
                              <a href="">
                                  {item.name}
                              </a>
                              <p>
                                  {item.species}
                              </p>
                          </div>
                          <div className="location">
                          Last known location:
                              <p>
                                  {item.location.name}:
                              </p>
                              <a href="">
                                  {item.location.name}
                              </a>
                          </div>
                          <div className="first location">
                              <p>
                                  {/* {item.origin}: */}
                              </p>
                              <a href="">
                                  {item.origin.name}
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
                  
                  // <Showcase image={item.image}
                  //   jugling={item.jugling}
                  //   human={item.human}
                  //   location={item.location}
                  //   citadel={item.citadel}
                  //   seen={item.seen}
                  //   mixup={item.mixup} />

                )

              })


            }

          </div>
        </div>
      </div>


              <Footer/>

    </div>

  );
}

export default App;
