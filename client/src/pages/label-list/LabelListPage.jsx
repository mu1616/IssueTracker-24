import React, { useEffect, useReducer } from 'react';
import reducer, { INIT_DATA } from './reducer';
import { getAllIssues } from '../../lib/axios/issue';
import { getAllLabels } from '../../lib/axios/label';
import { getAllMilestones } from '../../lib/axios/milestone';
import Header from '../../components/Header';
import LabelListContainer from '../../components/label/LabelListContainer';
import Navigation from '../../components/label/Navigation';
import PageBody from '../../components/label/PageBody';

export const LabelsContext = React.createContext();

const initialState = {
  issues: [],
  labels: [],
  milestones: [],
};

const LabelListPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(async () => {
    const [issues, labels, milestones] = await Promise.all([
      getAllIssues(),
      getAllLabels(),
      getAllMilestones(),
    ]);
    dispatch({
      type: INIT_DATA,
      data: { issues, labels, milestones },
    });
  }, []);

  return (
    <LabelsContext.Provider value={{ state, dispatch }}>
      <Header />
      <PageBody>
        <Navigation />
        <LabelListContainer />
      </PageBody>
    </LabelsContext.Provider>
  );
};

export default LabelListPage;
