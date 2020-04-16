import React, {useState, useEffect} from 'react'
import {getPartySchema} from '../../api'

const BookParty = ({partyType}) => {
  useEffect(() => {
    const fetchData = async () => {
      const partySchema = await getPartySchema(partyType)
      setPartySchema(partySchema)
    }
    fetchData()
  }, [partyType])
  const [partySchema, setPartySchema] = useState([])
  
  console.log(partySchema);
  

  return (
    <div>Book Party</div>
  )
}

export default BookParty