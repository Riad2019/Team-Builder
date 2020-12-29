import React from 'react';
import './UserProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faUserPlus} from '@fortawesome/free-solid-svg-icons'

const UserProfile = (props) => {

   // console.log(props);
    const {first_name, last_name ,picture,gender,number,email,yearly_salary} = props.profile;
    
    const profileStyle ={border:'1px solid gray', margin:'10px'  , padding :'10px' }
    const profilePicture = {height: '150px'}
    const handleAddButton = props.handleAddButton;
  
    return (
        <div style={profileStyle}>
            <img style={profilePicture} src={picture} alt=""/>
          <h4> Name: {first_name + ' ' + last_name} </h4>
          <p>Gender: {gender}</p>
          <p>number: {number}</p>
          <p>email: {email}</p>
          <p>Yearly Salary : ${yearly_salary}</p>

          <button className= "main-button" 
          onClick = { () => handleAddButton(props.profile)}
          ><FontAwesomeIcon icon={faUserPlus} /> ADD Member</button>

        </div>
    );
};

export default UserProfile;