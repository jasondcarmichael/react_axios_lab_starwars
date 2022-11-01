import './App.css';
// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { BASE_URL } from './globals'
// import Starships from './components/Starships';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  // const [starshipsList, setStarshipsList] = useState([])
  // const [selectedStarship, setSelectedStarship] = useState(null) 

  // const [modelList, setModelList] = useState([])
  // const [selectedModel, setSelectedModel] = useState(null) 

  // const [maxSpeedList, setMaxSpeedList] = useState([])
  // const [selectedMaxSpeed, setSelectedMaxSpeed] = useState(null) 

  // useEffect(() => {
  //   const getStarships = async () => {
  //     const response = await axios.get(`${BASE_URL}/starships`)
  //     console.log(response.data.results)
  //     setStarshipsList(response.data.results)
  //   }

  //   const getModels= async () => {
  //     const response = await axios.get(`${BASE_URL}/starships/model`)
  //     console.log(response.data.results)
  //     setModelList(response.data.results)
  //   }

  //   const getMaxSpeed= async () => {
  //     const response = await axios.get(`${BASE_URL}/starships/max_atmosphering_speed
  //     `)
  //     console.log(response.data.results)
  //     setMaxSpeedList(response.data.results)
  //   }


  //   getStarships()
  //   getModels()
  //   getMaxSpeed()


  // }, []) 


  return (
    <div className="App">

      <header>

        <Nav />
      </header>

      <main>

        <Main></Main>
      </main>
    

     
    </div>
  );
}

export default App;
