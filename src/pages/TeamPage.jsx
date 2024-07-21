import { useState , useEffect} from 'react'
import TeamCardComponent from '../components/TeamCardComponent'

function TeamPage() {

  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then((data) => setAllUsers(data.users));

  }, []);
  return (
    <div className='container mx-auto bg-gray-200'>

      <h1 className='text-center uppercase font-bold text-3xl mt-[20px] mb-[20px]'>All team members</h1>

      <div className='flex flex-wrap justify-center items-center gap-10'>
            {allUsers.map((user) => {

            return <TeamCardComponent key={user.id} user={user} />

            })}
      </div>
      
    </div>
  )
}

export default TeamPage