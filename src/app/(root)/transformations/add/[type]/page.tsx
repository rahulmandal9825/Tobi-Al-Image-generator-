
import Header from '@/components/Header';
import TransformationForm from '@/components/TransformationForm';
import { transformationTypes } from '@/constants';
import { createUser, getUserById } from '@/lib/actions/user.actions';
import { connectToDatabase } from '@/lib/database/mongoose';
import { auth } from '@clerk/nextjs';
import {  redirect } from 'next/navigation';
import React from 'react';

const AddTransformationPage = async ({params: {type}}:SearchParamProps) => {

 const transformation = transformationTypes[type];
    
 const { userId} = auth();

 if(!userId) redirect('sign-in')

 const user = await getUserById(userId);

 console.log(user);
 
   await connectToDatabase()



  return (
  <div className='w-full flex justify-center'>

<Header title={transformation.title} subtitle={transformation.subTitle}/>
<TransformationForm 
    action="Add" 
    // userId={user._id} 
    // type={transformation.type as TransformationTypeKey} 
    // creditBalance={user.creditBalance}
/>
  </div>

    
  );
};

export default AddTransformationPage;