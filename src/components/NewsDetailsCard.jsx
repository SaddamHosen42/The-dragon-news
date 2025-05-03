import React from 'react';
import { Link } from 'react-router';
import { HiArrowLeft } from "react-icons/hi2";

const NewsDetailsCard = ({news}) => {
    //console.log(news);
    const {title,image_url,details,category_id}=news;
    
    return (
        <div className='p-7 border-2 border-gray-200 rounded-lg shadow-lg space-y-4'>
            <img src={image_url} className='w-full rounded h-[420px]'/>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <p className='text-[#706F6F]'>{details}</p>
            <Link to={`/category/${category_id}`} className='btn btn-secondary'><HiArrowLeft /> All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;