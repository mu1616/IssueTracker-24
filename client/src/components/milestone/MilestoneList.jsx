import React from 'react';
import styled from 'styled-components';
import MilestoneListLeft from './MilestoneListLeft';
import MilestoneListRight from './MilestoneListRight';

const MilestoneListWrapper = styled.div`
  display:flex;
  width:80%;
  height:100px;
  background-color:#fff;
  border:1px solid #E1E4E8;
  margin:0 auto;
`;

const MilestoneList = ({milestone}) =>{
   return (
       <MilestoneListWrapper>
            <MilestoneListLeft milestone={milestone}/>
            <MilestoneListRight milestone={milestone}/>
       </MilestoneListWrapper>
   );
}


export default MilestoneList;