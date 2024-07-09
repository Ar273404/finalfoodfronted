// src/pages/ProfilePage.js
import React, { useEffect, useState } from 'react';
import ProfileForm from './ProfileForm';
import { getUserProfile } from './ProfileApi';

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const getUserData = async()=> {
        const response = await getUserProfile();
        console.log(response);
     

        const fetchedUser = {
          name: response.name,
          email: response.email,
          phone: response.phone,
          address: '123 Main St, Anytown, USA',
          profileImage: 'https://via.placeholder.com/150', // Placeholder image URL
        };
        setUser(fetchedUser);


      };
      getUserData();
    } catch (error) {
      console.log('error in fetching user profile ',error);
    }
   
    
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        {user ? (
          <ProfileForm user={user} setUser= {setUser} />
        ) : (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg"> Loading...</div>
    </div>
  )}
      </div>
    </div>
  );
};

export default ProfilePage;