import { Star } from 'lucide-react'
import React from 'react'

const Stars = ({ stars, setStars }) => {
    return (
        <div className='flex items-center gap-3 mt-1.5'>
            {[1, 2, 3, 4, 5].map((el, index) => (
                <Star
                    className={`${el <= stars ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'} w-8 h-8 cursor-pointer`}
                    key={index}
                    onClick={() => setStars(el)}
                />
            ))}
        </div>
    )
}

export default Stars