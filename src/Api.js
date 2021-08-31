import axios from "axios";

// const BASE_URL = "http://localhost:8000/api/"
const BASE_URL = "https://portfoliobackend.pythonanywhere.com/"
export const HEROENDPOINT = 'hero-content'
export const ABOUTENDPOINT = 'about-content'
export const ORGANIZATIONENDPOINT = 'experience-organization'
export const EXPERIENCEENDPOINT = 'experience-content'
export const SKILLSENDPOINT = 'skills-list'
export const CONTACTENDPOINT = 'contact-content'
export const PROJECTSENDPOINT = 'projects-list'
export const BLOGCATEGORIESENDPOINT = 'posts-category'
export const BLOGSENDPOINT = 'posts'

const instance = axios.create({
    baseURL:`${BASE_URL}`
});

export default instance