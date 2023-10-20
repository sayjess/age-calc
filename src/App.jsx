import React from 'react'

import Form from './components/Form'
import Age from './components/Age'

function App() {

  const [userData, setUserData] = React.useState({
    day: "",
    month: "",
    year: "",
    formSubmitted: false,
    daysDiffer: 0,
    monthsDiffer: 0,
    yearsDiffer: 0

  })



  const onChange = event => {
    const {name, value} = event.target 
    setUserData(prevFormData => {
      return {
          ...prevFormData,
          [name]: value
      }
    })
  }


  return (
    <div className='app-container'>
      <Form updateData={onChange} userData={userData} setData={setUserData}/>
      <Age userData={userData} />
    </div>
  )
}

export default App
