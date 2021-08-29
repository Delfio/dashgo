import React from 'react';
import { SideBarDrawerContexts } from '../contexts/SidBarDrawerContexts';

const useSideBarDrawer = () => React.useContext(SideBarDrawerContexts);

export default useSideBarDrawer;