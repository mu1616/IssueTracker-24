import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import FilterBar from './filter/FilterBar';
import NavigationContainer from './NavigationContainer';
import CreateButton from './CreateButton';
import FilterMenuDropDown from './filter/FilterMenuDropDown';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
  margin-top: 70px;
  margin-bottom: 40px;
`;

export const FilterMenuContext = React.createContext();

const MenuContainer = () => {
  const [showFilterMenu, setFilterMenu] = useState(false);
  const onClickFilterButton = () => setFilterMenu(!showFilterMenu);

  return (
    <FilterMenuContext.Provider value={{ onClickFilterButton, setFilterMenu }}>
      <Div>
        <FilterBar
          onClickFilterButton={onClickFilterButton}
          setFilterMenu={setFilterMenu}
        />
        <NavigationContainer />
        <CreateButton />
      </Div>
      {showFilterMenu && <FilterMenuDropDown />}
    </FilterMenuContext.Provider>
  );
};

export default MenuContainer;
