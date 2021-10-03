import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/"
// const BASE_URL = "https://backend--portfolio.herokuapp.com/api/"
export const HEROENDPOINT = 'hero-content/'
export const ABOUTENDPOINT = 'about-content/'
export const ORGANIZATIONENDPOINT = 'experience-organization/'
export const EXPERIENCEENDPOINT = 'experience-content/'
export const SKILLSENDPOINT = 'skills-list/'
export const CONTACTENDPOINT = 'contact-content/'
export const PROJECTSENDPOINT = 'projects-list/'
export const BLOGCATEGORIESENDPOINT = 'posts-category/'
export const BLOGSENDPOINT = 'posts/'
export const SUBSCRIBEENDPOINT = 'subscribe/'
export const RESUMEENDPOINT = 'resume/'
export const COMMENTENDPOINT = 'comment/'

const instance = axios.create({
    baseURL: `${BASE_URL}`
});

export default instance