import React from 'react'
import './Cardcontainer.css'
function Cardcontainer() {
  return (
    <div>
      <div className="card-container">
    <Card /><Card /><Card /><Card /></div>
    </div>
  )
}

export default Cardcontainer

const Card =() =>{
    return(
        <div><div className="cards">
<div><img src="" alt="" /> </div>
<div><p></p></div>
<div><p></p></div>
        </div></div>
    );
}