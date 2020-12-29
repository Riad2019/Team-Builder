import logo from './logo.svg';
import './App.css';
import UserProfile from './components/UserProfile/UserProfile';
import FakeData from '../src/FakeData/MOCK_DATA.json'
import { useState } from 'react';
import Salary from './components/Salary/Salary';

function App() {
          const first15 = FakeData.slice(0, 15);
          const[ profile, setProfile ] = useState(first15)
          //console.log(profile)
          const [cart, setCart] = useState([])

          const handleAddButton = (profile )=>{
            console.log('member added' , profile)
            const newCart =[...cart , profile] 
            setCart(newCart)
          }

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <h4>Total User : {profile.length}</h4>
      <h4>Choose Your Team Member</h4>
      
      <Salary cart={cart}></Salary>
      {
        profile.map(profile => <UserProfile  
          profile={profile}
          handleAddButton={handleAddButton}
          key={profile.id}
          ></UserProfile>)
      }

    </div>
  );
}

export default App;
