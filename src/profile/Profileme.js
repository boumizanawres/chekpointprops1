import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({Fullname,Bio, handlname,Profession,children}) => {
  return (
    <div>
        <h1 style={{color:'pink'}}>my name is {Fullname} I'm a {Profession }</h1>
        <button onClick={()=> handlname()}>click me</button>
        {children}
        </div>

  )
}

Profile.propTypes={
    Fullname:PropTypes.string,
    Bio:PropTypes.string}


Profile.defaultProps={
    Fullname:'Boumiza Nawres',
    Bio:'..',
    Profession:'Fullstack developer'
    
}

export default Profile
