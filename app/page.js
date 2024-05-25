'use client'
import { ThumbsDown, ThumbsUp, X } from 'lucide-react';
import React, { useState } from 'react';
import Text from './components/Text';
import Stars from './components/Stars';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [safetyRating, setSafetyRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [isRecommend, setIsRecommend] = useState(null);
  const [praiseIndex, setPraiseIndex] = useState(null);

  const handleSafetyRating = (rating) => {
    setSafetyRating(rating);
  };

  const handleCommunicationRating = (rating) => {
    setCommunicationRating(rating);
  };

  const handleRecommendation = (recommend) => {
    setIsRecommend(recommend);
  };

  const handlePraise = (index) => {
    setPraiseIndex(index);
  };

  return (
    <>
      {isModalOpen && (
        <div className='absolute z-10 top-0 left-0 w-full h-screen bg-white p-3 px-4'>
          <X onClick={() => setModalOpen(false)} className='cursor-pointer mb-2' />
          <div className='md:flex flex-col items-center justify-center'>
            <h1 className='font-medium tracking-wide text-2xl md:text-4xl'>Leave a Review</h1>
            <div className='my-5'>
              <div>
                <Text heading={"Safety"} text={"How many stars given for safety measures"} />
                <Stars stars={safetyRating} setStars={handleSafetyRating} />
              </div>
              <div className='mt-5'>
                <Text heading={"Communication"} text={"How many stars given for communicating with you"} />
                <Stars stars={communicationRating} setStars={handleCommunicationRating} />
              </div>
              <div className='my-5'>
                <Text heading={"Would you recommend Tarusti?"} text={"Your recommendation based on past activity"} />
                <div className='flex items-center gap-5 mt-4'>
                  <div
                    className={`flex items-center gap-1 cursor-pointer ${isRecommend === false && 'text-red-400'
                      }`}
                    onClick={() => handleRecommendation(false)}
                  >
                    <ThumbsDown className={`w-8 h-8 fill-gray-200 text-gray-200 ${isRecommend === false && 'text-red-400 fill-red-400'
                      } `} />
                    <p>No</p>
                  </div>
                  <div
                    className={`flex items-center gap-1 cursor-pointer ${isRecommend === true ? 'text-green-400' : ''
                      }`}
                    onClick={() => handleRecommendation(true)}
                  >
                    <ThumbsUp className={`w-8 h-8 fill-gray-200 text-gray-200 ${isRecommend === true && 'text-green-400 fill-green-400'
                      } `} />
                    <p>Yes</p>
                  </div>
                </div>
              </div>
              <div>
                <Text heading={"Praise"} text={"What you should praise?"} />
                <div className='flex items-center gap-3 mt-3 flex-wrap'>
                  {['Adventureous', 'Clean', 'Good'].map((el, index) => (
                    <div
                      key={index}
                      className={`px-3 py-1 rounded-[20px] ${praiseIndex === index ? 'bg-green-300' : 'bg-gray-200'
                        } cursor-pointer`}
                      onClick={() => handlePraise(index)}
                    >
                      <p>{el}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='h-screen w-full flex items-center justify-center'>
        <button
          className='border border-1 rounded-[4px] px-2 py-1.5 hover:bg-slate-50 font-medium text-[18px]'
          onClick={() => setModalOpen(!isModalOpen)}
        >
          Review
        </button>
      </div>
    </>
  );
};

export default App;
