import React from 'react';
import { Link } from 'react-router-dom';
import Stars from './Stars';

const Review = ({ singleReview }) => {
    const { name, img, review, title, time } = singleReview;
    // console.log(name, img, review, title, time);
    return (
        <div>
            <article>
                <div className="flex items-center mb-4 space-x-4">
                    <img className="w-10 h-10 rounded-full" src={img} alt="" />
                    <div className="space-y-1 font-medium dark:text-white">
                        <p>{name}</p>
                    </div>
                </div>
                <div className="flex items-center mb-1">
                    <Stars></Stars>
                    <Stars></Stars>
                    <Stars></Stars>
                    <Stars></Stars>
                    <Stars></Stars>
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{ title }</h3>
                <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>{time}</p></footer>
                <p className="mb-2 font-light text-gray-500 dark:text-gray-400">{review}</p>
                <Link to="#" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</Link>
                <aside>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
                    <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                        <Link to="#" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</Link>
                        <Link to="#" className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</Link>
                    </div>
                </aside>
            </article>
        </div>
    );
};

export default Review;