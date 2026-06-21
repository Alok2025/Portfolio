import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css'
import App from './App.jsx'
import Header from './Component/Header.jsx'
import Mainsection from './Component/Mainsection.jsx';
import About from './Component/About.jsx';
import Skills from './Component/Skills.jsx';
import Project from './Component/Project.jsx';
import Exp from './Exp.jsx';
import Contacts from './Contacts.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header/>
    <Mainsection/>
    <About/>
    <Skills/>
    <Project/>
    <Exp/>
    <Contacts/>
  </StrictMode>,
)
