import React, { useContext } from 'react';
import styled from 'styled-components';
import IssueLogo from './IssueLogo';
import IssueContent from './IssueContent';
import { IssuesContext } from '../../pages/issue-list/IssueListPage';
import { CHECK_ISSUE, UNCHECK_ISSUE } from '../../pages/issue-list/reducer';

const IssueItemWrapper = styled.div`
  width: 80%;
  height: 75px;
  font-size: 14px;
  display: flex;
  margin: 0 auto;
  padding: 20px;
  &:hover {
    background-color: #e9e9e9;
  }
  border: 1px solid #eaecef;
  box-sizing: border-box;
`;
const IssueItem = ({ issue }) => {
  const { dispatch } = useContext(IssuesContext);

  const onCheckBoxChange = (e) => {
    if (e.target.checked) {
      dispatch({ type: CHECK_ISSUE, id: issue.id });
    } else {
      dispatch({ type: UNCHECK_ISSUE, id: issue.id });
    }
  };

  return (
    <>
      <IssueItemWrapper>
        <input
          type="checkbox"
          onChange={onCheckBoxChange}
          checked={issue.checked}
        />
        <IssueLogo issue={issue} />
        <IssueContent issue={issue} />
      </IssueItemWrapper>
    </>
  );
};

export default IssueItem;
