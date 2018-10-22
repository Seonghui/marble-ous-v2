import React from 'react';
import ProjectMain from '../components/Project/ProjectMain/ProjectMain';
import data from '../data.json';

const MainPage = () => {
  return (
    <ProjectMain data={data.list}/>
  )
}

export default MainPage;