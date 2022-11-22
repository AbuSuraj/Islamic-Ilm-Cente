import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const checkOut = useLoaderData();
    const {id, name, image, details, fee, duration, instructor} = checkOut;
    console.log(checkOut)
    return (
        <div className='block md:flex mt-10 justify-around items-center'>
            <div>
            <lottie-player src="https://assets10.lottiefiles.com/private_files/lf30_Jk3ls8.json"  background="transparent"  speed="1"  style={{width: '300px', height: '300px'}}  loop autoplay></lottie-player>
            </div>
            <div className="max-w-2xl  mb-4 mx-4">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-blue-900 dark:border-gray-700">
           
            <img
            style={{ height:255}}
              className="rounded-t-lg w-full"
              src= {image}
              alt=""
            />
           
          <div className="p-5">
             
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                 {name}
              </h5>
         
            <div className="font-normal text-gray-900 mb-3 dark:text-gray-100">
               <p> <span className="font-bold">Course id:</span> {id}</p>
            </div>
            <div className="font-normal text-gray-900 mb-3 dark:text-gray-100">
               <p> <span className="font-bold">Course Fee:</span> ${fee} only</p>
            </div>
            <div className="font-normal text-gray-900 mb-3 dark:text-gray-100">
               <p> <span className="font-bold">Duration:</span> {duration} Weeks</p>
            </div>
             
          </div>
        </div>
      </div>
            
        </div>
    );
};

export default CheckOut;