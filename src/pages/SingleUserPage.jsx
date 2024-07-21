import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SingleUserPage() {
    const [singleUser, setSingleUser] = useState(null); 
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleUser(data);
            })
            .catch(error => {
                console.error('Error fetching user:', error);
            });
    }, [id]); 

    if (!singleUser) {
        return <div>Loading...</div>; 
    }

    return (
        <div className='flax flex-col justify-center items-center mt-[100px] ml-[700px] mr-[700px] border border-blue-500 rounded-lg bg-gray-200 '>
          <div className='flex flex-col justify-center items-center gap-[10px] mt-[20px] mb-[20px]  '>
              {singleUser.image && <img src={singleUser.image} alt={`${singleUser.firstName} ${singleUser.lastName}`} />}
              <strong><h2>{singleUser.firstName} {singleUser.lastName}</h2></strong>
              <strong><p>{singleUser.email}</p> </strong>
              <strong><p>{singleUser.address?.city || 'No city available'}</p></strong>
              <strong><p>{singleUser.gender || 'No gender available'}</p></strong>
              <strong><p>{singleUser.birthDate || 'No birth date available'}</p></strong>
            </div>
        </div>
    );
}

export default SingleUserPage;
