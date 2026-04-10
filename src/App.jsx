
import './App.css'
import Click from './eventhandler'
import Counter from './counter'
import Batsman from './batsman'
import Bowler from './bowler'

function App() {
  const persons=[
    {id:'1', name:'Farhan', lang:'JavaScript', isDone:true, duration:'90days' ,left:'10days'},
    {id:'2', name:'Joynal', lang:'TypeScript', isDone:true, duration:'90days',left:'10days' },
    {id:'3', name:'Motin', lang:'NodeJS', isDone:false, duration:'90days',left:'10days'},
    {id:'4', name:'Fahad', lang:'Golang', isDone:true, duration:'90days',left:'10days'},
    {id:'5', name:'Khan', lang:'Golang', isDone:false, duration:'90days',left:'10days'},
    {id:'6', name:'Fahmid', lang:'Golang', isDone:true, duration:'90days',left:'10days'}
  ]

  const Click3 = () => {
    alert('click 3')
  }
  let ClickAdd = (num) =>{
    const addNum = num + 10;
    return alert(addNum);
  }
  let ClickMinus = (num) =>{
    const minusNum = num - 10;
    return alert(minusNum);
  }

  return (
    <>
      <h2 style={{
        textAlign:'center',
        fontSize:'40px',
        fontWeight:'bold',
        margin:'20px 0'
      }}>Completeing Learning Programming Languages</h2>
    <Bowler></Bowler>
    <Batsman></Batsman>
    <Counter></Counter>
    {
      persons.map(person => <ToDo key={person.id} person={person}></ToDo>)
    }
    {
      persons.map(person => <Member key={person.id} member={person}></Member>)
    }
    {
      persons.map(person => <Only key={person.id} person={person}></Only>)
    }
    {
      persons.map(person => <OnlyDone key={person.id} done={person}></OnlyDone>)
    }
    {
      persons.map(person => <OnlyPending key={person.id} pending={person}></OnlyPending>)
    }
    <button className='btn' onClick={Click}>Click Me</button>
    <button className='btn' onClick={function Click2(){
      alert('click 2');
    }}>Click Me 2</button>
    <button className='btn' onClick={Click3}>Click 3</button>
    <button className='btn' onClick={() => ClickAdd(25)}>Sum</button>
    <button className='btn' onClick={() => ClickMinus(75)}>Minus</button>
    </>
  )
}

function ToDo({person}){
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

function Member({member}){
  if(member.isDone === true){
    return(
      <div className='done'>
      <h2>Name : {member.name}</h2>
      <p>Expert : {member.lang}</p>
    </div>
    )
  }return(
    <div className='pending'>
      <h2>Member Not Found</h2>
    </div>
  )
}

function Only({person}){
  return person.isDone ? <h2 className='done'>Name : {person.name} || Expert : {person.lang}</h2> : <h2 className='pending'>Person Not Found</h2>
}

function OnlyDone({done}){
 return done.isDone &&  <h2 className='done'>Name : {done.name} || Expert : {done.lang}</h2>
}

function OnlyPending({pending}){
  return pending.isDone ||   <h2 className='pending'>Person Not Found</h2>
}

export default App
