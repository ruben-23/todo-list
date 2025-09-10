
import displayProjects from './displayProjects';
import displaySidebar from './displaySidebar';
import { getProjects } from './projectsController';
import './style.css';

displaySidebar();

displayProjects(getProjects());