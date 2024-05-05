import React, { useState } from 'react';
import {IoMdLogIn} from 'react-icons/io';
import  Button from 'react-bootstrap/Button';
import './Card.css';
import { FcOk } from "react-icons/fc";
import { IoLocationSharp } from "react-icons/io5";


export const Card=({key,name,role,location,jd,salary,experiance})=>{
    //For Toggling the variable to view more || view less
    const [toggle,settoggle]=useState(false);
    //some objects in the array have experiance value as "null".
        if(experiance==null)
        {
            experiance=0;
        }
        //initial content of job description (before clicking view more link, this content appears for us)
        const getDescription = () => {
            // Splitting the job description by spaces and selecting the first 50 words
            const words = jd.split(' ').slice(0, 10).join(' ');
            return words + '...';
        };
        
        
    return(
        //contents in a card like role,company,pay...
        <div key={key} className='Card col-md-3 mb-1 m-5'>
            <h6 className='role'>Role : {role}</h6>
            <h6>Salary : {salary} $ <FcOk/></h6>
            <h6 className='name'>Company : {name}</h6>
            <h6 className='location'><IoLocationSharp /> Location : {location}</h6>
            <h6><u>Job Description</u></h6>
            {/* before toggling the link getDescription() will be displayed and after toggling entire content will be displayed */}
            {
                toggle ? JSON.stringify(jd) : getDescription()
            }
            {/* view more and view less links */}
            <a className='primary' onClick={()=>settoggle(!toggle)}>{!toggle?"View More":"View Less"}</a>

            <h6 className='experiance'>Min Experiance : {experiance} years</h6>
            {/* Apply button */}
            <Button variant='success'  >Apply <IoMdLogIn/></Button>
        </div>
    )
}