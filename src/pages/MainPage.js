import React from 'react';
import ProjectList from '../components/Project/ProjectList/ProjectList';
import data from '../data.json';

const MainPage = () => {
  return (
    <div>
      <h2>
        <ProjectList data={data.list}/>
      </h2>
    </div>
  )
}

export default MainPage;