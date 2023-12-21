import React, { ChangeEvent, FormEvent, useState } from 'react';
import debounce from 'lodash/debounce';
import searcIcon from '../../public/Search.svg';
import Image from 'next/image';

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [username, setUsername] = useState('github');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setUsername(value)
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(username); // Set the username to the value the user typed
  };

  return (
    <form className='pl-4 bg-[#20293A] max-w-md mx-auto flex gap-2 rounded-lg items-center' onSubmit={handleSubmit}>
      <Image src={searcIcon} alt='search icon' className='flex-grow-0 shrink-0 h-5 w-5' />
      <input
        type="text"
        placeholder='username'
        value={username}
        onChange={handleInputChange}
        className='bg-transparent p  laceholder:text-[#4A5567] py-3 flex-grow border-0 outline-none text-[#ddd]'
      />
    </form>
  );
};

export default SearchBar;