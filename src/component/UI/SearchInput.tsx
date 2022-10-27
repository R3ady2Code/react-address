import React from 'react';

type InputProps = {
  placeholder: string;
  setValue: (value: string) => void;
  value: string;
  onEnter: () => any;
};

const SearchInput: React.FC<InputProps> = ({ placeholder, setValue, value, onEnter }) => {
  function onClickEnter() {
    onEnter();
  }
  return (
    <input
      type="text"
      className="search-input"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && onClickEnter()}
    />
  );
};

export default SearchInput;
