import { BASE_URL } from '../globals'
import axios from 'axios'
import { useState, useEffect } from 'react'


export default function Planets () {

    const [planetsList, setPlanetsList] = useState([])
    const [selectedPlanet, setSelectedPlanet] = useState(null) 

    const [climateList, setClimateList] = useState([])
    const [selectedClimate, setSelectedClimate] = useState(null) 

    const [terrainList, setTerrainList] = useState([])
    const [selectedTerrain, setSelectedTerrain] = useState(null) 

    const [populationList, setPopulationList] = useState([])
    const [selectedPopulation, setSelectedPopulation] = useState(null) 

    useEffect(() => {
        const getPlanets = async () => {
          const response = await axios.get(`${BASE_URL}/planets`)
          console.log(response.data.results)
          setPlanetsList(response.data.results)
        }
    
        const getClimate= async () => {
          const response = await axios.get(`${BASE_URL}/planets/climate`)
          console.log(response.data.results)
          setClimateList(response.data.results)
        }
    
        const getTerrain= async () => {
          const response = await axios.get(`${BASE_URL}/planets/terrain
          `)
          console.log(response.data.results)
          setTerrainList(response.data.results)
        }

        const getPopluation= async () => {
            const response = await axios.get(`${BASE_URL}/planets/population`)
            console.log(response.data.results)
            setPopulationList(response.data.results)
          }


        getPlanets()
        getClimate()
        getTerrain()
        getPopluation()
      }, []) 

      if(!planetsList) {
        return <h2> Loading Please Wait </h2>
    } else {

        return (

            <div className="grid">
                { 
                    planetsList.map((planet) => (
                        <div key={planet.id}
                        className="card">
                            <h3 id="name" key={planet.name}> {planet.name} </h3>
                            <p key={planet.climate}>Climate: {planet.cliimate}</p>
                            <p key={planet.terrain}>Terrain: {planet.terrain}</p>
                            <p key={planet.population}>Population: {planet.population}</p>
                        </div>
                    ))
                
                }
            </div>
        )
        }
    }




