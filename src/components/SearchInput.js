import React from 'react';
import {MagnifyingGlassIcon} from '@heroicons/react/24/solid';

const SearchInput = ({value, onChange}) => {
  return (
    <div className="flex items-center border rounded-md p-2">
      <div className="mr-2">
        <MagnifyingGlassIcon className='text-gray-400'  width={18} height={18}/>
      </div>
      <input
        onChange={(val)=> onChange(val) }
        value={value}
        type="text"
        placeholder="Cari"
        className="border-none focus:outline-none w-full"
      />
    </div>
  );
};

export default SearchInput;
