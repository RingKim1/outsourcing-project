import React, { useState } from 'react';
import {
  SearchContainer,
  SearchInputWrapper,
  SearchIcon,
  SearchInput,
  LogoImg
} from '../../styles/SideBar/searchStyle';

const Search = ({ shops, setFilteredShops }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onChangeSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter') {
      const newFilteredShops = shops.filter((shop) => {
        const lowerCaseSearchTerm = e.target.value.toLowerCase();
        return (
          shop?.name?.toLowerCase().includes(lowerCaseSearchTerm) ||
          shop?.genre?.toLowerCase().includes(lowerCaseSearchTerm) ||
          shop?.address?.toLowerCase().includes(lowerCaseSearchTerm)
        );
      });
      setFilteredShops(newFilteredShops);
    }
  };

  return (
    <SearchContainer>
      <LogoImg src="src/styles/assets/Eat Site Seoul.png"  />
      <SearchInputWrapper>
        <SearchIcon src="src/styles/assets/search.png" alt="search" />
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={onChangeSearch}
          onKeyDown={handleSearchSubmit}
          placeholder="검색"
        />
      </SearchInputWrapper>
    </SearchContainer>
  );
};

export default Search;