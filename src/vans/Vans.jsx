import React, {useState, useEffect} from 'react'


const Vans = () => {
    const [vanDetails, setVanDetails] = useState([]);

    useEffect(function(){
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVanDetails(data.vans))
    }, [])

    const vanElements = vanDetails.map(van => {
        return(
            <div key={van.id} className='van-title'>
                <img src={van.imageUrl} />
                <div className='van-details'>
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`class-type ${van.type} selected`}>{van.type}</i>
            </div>
        )
    })
    
  return (
    <>
        <h1>Explore our van options</h1>
        {vanElements}
    </>
  )
}

export default Vans