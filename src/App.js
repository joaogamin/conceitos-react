import React, { useState } from 'react';
import Header from './components/Header';

import './App.css';

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de App', 'Front-end web']);

  function handleAddProject() {
    //projects.push(`Novo Projeto ${Date.now()}`);
    setProjects([...projects,`Novo Projeto ${Date.now()}`]);
  }
  return (
    <>
      <Header title="Projects" />
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject} >Adicionar projeto</button>
    </>
  );
}

export default App;