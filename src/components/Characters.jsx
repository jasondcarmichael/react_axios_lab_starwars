import { BASE_URL } from '../globals'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Characters () {

    const [peopleList, setPeopleList] = useState([])
    const [selectedPerson, setSelectedPerson] = useState(null) 

    const [genderList, setGenderList] = useState([])
    const [selectedGender, setSelectedGender] = useState(null) 

    const [heightList, setHeightList] = useState([])
    const [selectedHeight, setSelectedHeight] = useState(null) 

    const [brthdayList, setBirthdayList] = useState([])
    const [selectedBirthday, setSelectedBirthday] = useState(null) 

    useEffect(() => {
        const getCharacters = async () => {
          const response = await axios.get(`${BASE_URL}/people`)
          console.log(response.data.results)
          setPeopleList(response.data.results)
        }
    
        const getGender= async () => {
          const response = await axios.get(`${BASE_URL}/people/gender`)
          console.log(response.data.results)
          setGenderList(response.data.results)
        }
    
        const getHeight= async () => {
          const response = await axios.get(`${BASE_URL}/people/height
          `)
          console.log(response.data.results)
          setHeightList(response.data.results)
        }

        const getBirthday= async () => {
            const response = await axios.get(`${BASE_URL}/people/birth_year`)
            console.log(response.data.results)
            setBirthdayList(response.data.results)
          }

        getCharacters()
        getGender()
        getHeight()
        getBirthday()
      }, []) 
    
      
    if(!peopleList) {
        return <h2> Loading Please Wait </h2>
    } else { 


        return (

            <div className="grid">
                { 
                    peopleList.map((person) => (
                        <div key={person.id}
                        className="card">
                            <h3 id="name" key={person.name}> {person.name} </h3>
                            <p key={person.gender}>Gender: {person.gender}</p>
                            <p key={person.height}>Height: {person.height}</p>
                            <p key={person.birth_year}>Birthday: {person.birth_year} </p>
                        </div>
                    ))
                
                }
            </div>
        )
        }
    }

    