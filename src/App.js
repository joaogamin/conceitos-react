import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import api from './services/api';

import './App.css';
import backgroundImg from './assets/background.jpg';

function App() {
  const [projects, setProjects] = useState([]);

  async function handleAddProject() {
    //projects.push(`Novo Projeto ${Date.now()}`);
    //setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    const response = await api.post('/projects',
      {
        title: `Novo Projeto ${Date.now()}`,
        owner: "ReactJS"
      }
    );

    const newProject = response.data;
    setProjects([...projects, newProject]);

  }

  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data);
      console.log(response);
    });
  }, []);

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject} >Adicionar projeto</button>

      <img width={300} src={backgroundImg} alt="Background" />
    </>
  );
}

export default App;