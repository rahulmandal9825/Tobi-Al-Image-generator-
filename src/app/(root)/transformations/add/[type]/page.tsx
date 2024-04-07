"use client"
import { createUser } from '@/lib/actions/user.actions';
import React from 'react';

const AddTransformationPage = () => {
  const user = {
    clerkId: 'ssdfadsfhsffdsf',
    email: 'rahulmandal',
    username: 'rahul',
    firstName: 'rahul',
    lastName: 'mandall',
    photo: 'http://sdsdsdsd'
  };

  const handleClick = async () => {
    try {
      const res = await createUser(user);
      console.log('User created:', res);
      // Handle success, e.g., show a success message to the user
    } catch (error) {
      console.error('Error creating user:', error);
      // Handle error, e.g., show an error message to the user
    }
  };
  
  return (
    <div className='w-full flex justify-center'>
      <button className='p-2 m-10 px-4 rounded-xl bg-black text-white' onClick={handleClick}>button</button>
    </div>
  );
};

export default AddTransformationPage;