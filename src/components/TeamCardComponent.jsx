import React from 'react'
import { Link } from 'react-router-dom'

function TeamCardComponent({user}) {
  return (
    <div className='w-[300px] border border-blue-300 rounded-lg'>
      <img src={user.image} alt="" />
      <h2>{user.firstName} {user.lastName}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>

      <Link to={`/singleUser/${user.id}`} className='px-[10px] py-[5px] bg-blue-500 text-white'>View Details</Link>
    </div>
  )
}

export default TeamCardComponent
