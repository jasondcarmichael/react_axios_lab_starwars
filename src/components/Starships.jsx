import { BASE_URL } from '../globals'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Starships (){

    const [starshipsList, setStarshipsList] = useState([])
    const [selectedStarship, setSelectedStarship] = useState(null) 

    const [modelList, setModelList] = useState([])
    const [selectedModel, setSelectedModel] = useState(null) 

    const [maxSpeedList, setMaxSpeedList] = useState([])
    const [selectedMaxSpeed, setSelectedMaxSpeed] = useState(null) 

  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get(`${BASE_URL}/starships`)
      console.log(response.data.results)
      setStarshipsList(response.data.results)
    }

    const getModels= async () => {
      const response = await axios.get(`${BASE_URL}/starships/model`)
      console.log(response.data.results)
      setModelList(response.data.results)
    }

    const getMaxSpeed= async () => {
      const response = await axios.get(`${BASE_URL}/starships/max_atmosphering_speed
      `)
      console.log(response.data.results)
      setMaxSpeedList(response.data.results)
    }
    getStarships()
    getModels()
    getMaxSpeed()
  }, []) 

    if(!starshipsList) {
        return <h2> Loading Please Wait </h2>
    } else { 
        

    return (

        <div className="grid">
            { 
                starshipsList.map((starship, index) => (
                    <div key={starship.id}
                    className="card">
                        <h3 id="name" key={starship.name}> {starship.name} </h3>
                        <p key={starship.created}>Model: {starship.model}</p>
                        <p key={starship.edited}>Max Speed: {starship.max_atmosphering_speed}</p>
                    </div>
                ))
            
            }
        </div>
    )
    }
}