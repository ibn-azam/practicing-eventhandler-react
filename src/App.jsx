
import './App.css'

function App() {
  const persons=[
    {id:'1', name:'Farhan', lang:'JavaScript', isDone:true, duration:'90days' ,left:'10days'},
    {id:'2', name:'Joynal', lang:'TypeScript', isDone:true, duration:'90days',left:'10days' },
    {id:'3', name:'Motin', lang:'NodeJS', isDone:false, duration:'90days',left:'10days'},
    {id:'4', name:'Fahad', lang:'Golang', isDone:true, duration:'90days',left:'10days'},
    {id:'4', name:'Khan', lang:'Golang', isDone:false, duration:'90days',left:'10days'},
    {id:'4', name:'Fahmid', lang:'Golang', isDone:true, duration:'90days',left:'10days'}
  ]

  return (
    <>
      <h2 style={{
        textAlign:'center',
        fontSize:'40px',
        fontWeight:'bold',
        margin:'20px 0'
      }}>Completeing Learning Programming Languages</h2>

    {
      persons.map(person => <ToDo person={person}></ToDo>)
    }
    </>
  )
}

function ToDo({person}){
  console.log(person)
  if(person.isDone === true){
    return(
      <div className='done'>
        <h2>Name : {person.name}</h2>
        <h4>Language : {person.lang}</h4>
        <p>Done : ✔ </p>
        <p>Duration : {person.duration}</p>
      </div>
    )
  }else{
    return(
      <div className='pending'>
        <h2>Name : {person.name}</h2>
        <h4>Language : </h4>
        <p>Pending : ❌ </p>
        <p>Time Left : {person.left}</p>
      </div>
    )
  }
}

export default App
