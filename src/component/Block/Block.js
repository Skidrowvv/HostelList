import React from 'react';
import HOTELS from '../../redux/state.js';


const HostelCard = (props)=>{
  const {id,name,description,price,img} = props
  return(
    <div>
    <img src={img} height='250px' width='450px'/>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
        <div>
          <b>{price}</b>
        </div>
    </div>
  )
}

const hostelList  = HOTELS.map(hotel => 
    <HostelCard
    key={hotel.id}
    name={hotel.name}
    img={hotel.img}
    price={hotel.price}
    description={hotel.description}
    />)


export default hostelList