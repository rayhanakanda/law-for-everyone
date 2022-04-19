import React from 'react';
import useReview from '../../Hooks/useReview';
import Review from './Review'
import './ReviewPage.css'

const ReviewPage = () => {
    const [review] = useReview([])
    return (
        <>
            <h1 className='text-xl font-medium pt-6 review-header-border w-fit mx-auto pb-1 mb-10 md:text-4xl'>All Reviews</h1>
            <div className="review-parent grid grid-cols-1 md:grid-cols-3 gap-14 px-10 mb-10">
            {
                review.map(singleReview => <Review key={singleReview.id} singleReview= {singleReview}></Review>)
            }
        </div>
        </>
    );
};

export default ReviewPage;