import React, { useContext } from 'react';
import styled from 'styled-components';
import { IssuesContext } from '../../../pages/issue-list/IssueListPage';

const DetailsItem = styled.div`
  border-bottom: 1px solid #eaecef;
  height: 32px;
  box-sizing: border-box;
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #e9e9e9;
  }
  &:nth-child(1) {
    font-weight: 600;
    background-color: #fafbfc;
    cursor: auto;
    &:hover {
      background-color: #fafbfc;
    }
  }
`;

const DetailsMenuDropDown = styled.div`
  width: 200px;
  position: absolute;
  top: 70px;
  left: 20px;
  z-index: 10;
  border: 1px solid #eaecef;
  margin-top: -30px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
`;

const LabelMenuDropDown = () => {
  const { state } = useContext(IssuesContext);
  const { labels } = state;

  return (
    <>
      <DetailsMenuDropDown>
        <DetailsItem>Filter by label</DetailsItem>
        <DetailsItem>검색창</DetailsItem>
        <DetailsItem>Unlabeled</DetailsItem>
        {labels.map((label, index) => (
          <DetailsItem key={index}>{label.title}</DetailsItem>
        ))}
      </DetailsMenuDropDown>
    </>
  );
};

export default LabelMenuDropDown;
