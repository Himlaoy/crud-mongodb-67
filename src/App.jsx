
import './App.css'

function App() {

  const handleSubmit = (event) =>{
    event.preventDefault()
    const form  = event.target
    const email = form.email.value
    const name = form.name.value
    const user = {email, name}

    
    console.log(user)

    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
        alert('data added successfully')
        form.reset
      }
    })


  }
 

  return (
    <div>
      <h2>simple crud</h2>
      <form onSubmit={handleSubmit}> 
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <button>Go to database</button>
      </form>
    </div>
  )
}

export default App
