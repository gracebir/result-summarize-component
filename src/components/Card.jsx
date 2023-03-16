import React from 'react'
import reaction from '../assets/images/icon-reaction.svg'
import memory from '../assets/images/icon-memory.svg'
import verbal from '../assets/images/icon-verbal.svg'
import visual from '../assets/images/icon-visual.svg'

const images = [reaction, memory, verbal, visual]
function Card({category,score, index}) {
  return (
    <div className={`bg-b-accent-${index+1} rounded-lg px-4 py-3 flex justify-between items-center`}>
      <div className='flex gap-3 items-center'>
        <img src={images[index]} alt={category} />
        <p className={`text-accent-${index+1} text-[18px]`}>{category}</p>
      </div>
      <p className='text-clr-lavender'><span className='text-clr-dark-gray font-semibold'>{score}</span> / 100</p>
    </div>
  )
}

export default Card
