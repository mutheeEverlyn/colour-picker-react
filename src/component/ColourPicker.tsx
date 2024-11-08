import {useState} from 'react'
import './ColourPicker.css'
const ColourPicker = () => {
    const[colour,setColour]=useState("#ffffff");

    function handleColourChange(event:any){
      setColour(event.target.value) ; 
    }
  return (
    <div className='container'>
      <h1>COLOUR PICKER</h1>
      <div className='colour' style={{background:colour}}>
       colour:{colour}
      </div>
     <label>choose a colour</label> 
     <input type="color" value={colour} onChange={handleColourChange}/>
    </div>
  )
}

export default ColourPicker
