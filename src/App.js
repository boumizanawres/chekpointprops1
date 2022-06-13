
import './App.css';
import phpro from './profile/PhProfile.JPG'
import Profile from './profile/Profileme'

function App() {
  

  let msg='hi my name is nawres'
  const handlname =()=>{ alert(msg)}
  return (
    <div className="App">
  
      <Profile  handlname={handlname} >
        <img  src={phpro} alt='photoprofile' style={{width:'80px', height:'80px'}} />
        </Profile>
        {/* <Profile alert={handlname}/> */}
      
    </div>
  );
}

export default App;