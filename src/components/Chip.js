import React from 'react';

const Chip = ({label, value}) => {
  return (
    <div className='mb-4'>
        <span className='block text-2xl font-bold text-gray-500'>{label}</span>
        <span className='block text-lg font-bold'>{value}</span>
    </div>
  )
}

export default Chip;