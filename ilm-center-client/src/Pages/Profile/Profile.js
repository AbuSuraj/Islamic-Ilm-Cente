import React, { useState } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Profile = () => {
    const [error, setError] = useState("");
    const {  user, updateName,  updateUserProfile } =
      useContext(AuthContext);
      const [name, setName] = useState(user?.displayName);
      
    const photoURLRef = useRef(user.photoURL);
      const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, photoURL, password);
    
        handleUpdateUserProfile(name, photoURL);
         
      }
      const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
          displayName: name,
          photoURL: photoURL,
        };
        updateUserProfile(profile)
          .then(() => {})
          .catch((error) => console.error(error));
      };
     
    return (
        <div className='flex justify-center items-center pt-8'>
        <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
          <div className='mb-8 text-center'>
            <h1 className='my-3 text-4xl font-bold'>User Information</h1>
            {/* <p className='text-sm text-gray-400'>Create a new account</p> */}
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate=''
            action=''
            className='space-y-12 ng-untouched ng-pristine ng-valid'
          >
            <div className='space-y-4'>
              <div>
                <label htmlFor='name' className='block mb-2 text-sm'>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  defaultValue={name}
                  placeholder='Enter Your Name Here'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                  data-temp-mail-org='0'
                />
              </div>
              <div>
                <label htmlFor='photoURL' className='block mb-2 text-sm'>
                Photo URL
                </label>
                <input
                  type='text'
                  name='photoURL'
                  id='photoURL'
                  defaultValue={user?.photoURL}
                  placeholder='Enter Your photoURL Here'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                  data-temp-mail-org='0'
                />
              </div>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm'>
                  Email address
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  readOnly
                  placeholder='Enter Your Email Here'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                  data-temp-mail-org='0'
                />
              </div>
              <div>
                <div className='flex justify-between mb-2'>
                  <label htmlFor='password' className='text-sm'>
                    Password
                  </label>
                </div>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='*******'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
                />
              </div>
            </div>
            <div className='space-y-2'>
           
              <div>
                <button
                  type='submit'
                  className='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
          
          
           
        </div>
              </div>
    );
};

export default Profile;