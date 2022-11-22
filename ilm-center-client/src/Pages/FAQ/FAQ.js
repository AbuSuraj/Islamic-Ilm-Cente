import React from 'react';
import { useState } from 'react';

import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs'
import AccordionLayout from './AccordionLayout/AccordionLayout';
const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);
        return (
            <div className='flex flex-col justify-center items-center'>
              <h1 className='font-bold my-10 text-3xl text-center '>Frequently Asked Questions</h1>
              <h3 className='font-semibold text-center text-lg'>Below you’ll find answers to some of the most frequently asked question.</h3>
            <AccordionLayout 
              title="Who can attend programs and activities?"
              index={1}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
              Anyone is welcome to attend ICSC programs and activities, including Friday prayers, Sunday lectures and classes. Unless programs require registration, they are usually free, open to general attendance, and visitors are welcome to check them out. Please ask a program coordinator regarding the particular program you’re interested in. Read more about our programs.   
            </AccordionLayout>
  
            <AccordionLayout 
              title="Is there a dress code at the Center?"
              index={2}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
              No matter what your personal style is, we want you to feel comfortable at the Islamic Center. We do not have a specific dress code. We ask visitors to respect this as a place of worship and dress modestly. Women are not required to cover their hair to enter or participate in our Center, but we do request headscarves be worn in the prayer hall and during prayer out of reverence for our tradition. We have a small number of scarves available for guests at the front of the women’s prayer section.   
            </AccordionLayout>
            <AccordionLayout 
              title="Are young children welcome during prayer services or lectures?"
              index={3}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
              We love babies and children at the Islamic Center! We also love having a safe and comfortable worship space for all of our visitors. There are several kid-friendly areas at the Center, so there is no need to miss a program or service if your child gets fussy. Some of our programs, such as Friday prayer service, often feature live audio streaming making it easy to listen from the comfort of your home when you can’t make it in person. During Ramadan, fundraisers and other special events, we typically provide free childcare. When in doubt, please give us a call to find out at 213.382.9200.    
            </AccordionLayout>
            <AccordionLayout 
              title="Are there youth activities?"
              index={4}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
             Yes, there are various youth programs geared toward different age brackets and interests. They include Sunday School (K-6th grades), Junior Youth Group (6-8th grades), and Youth Group (high school and college aged). Please check out the different programs to see which one is right for you.   
            </AccordionLayout>
        </div>
          );
        };
    
export default FAQ;