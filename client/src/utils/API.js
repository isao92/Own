import axios from 'axios';
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post('api/signup', {username: username, email: email, password: password});
  },
  // get all projects documents as array of objects
  getAllProjects: () => {
    return axios.get(`/api/projects`);
  },

  // get data associated with one project
  getOneProjects: (id) => {
    return axios.get(`/api/projects/${id}`);
  },

  // projects delete
  deleteOneProjects: (id) => {
    return axios.delete(`/api/projects/${id}`)
  },

  // // get all projects documents as array of objects
  // getAllProjects: () => {
  //   return axios.get(`/api/projects`);
  // },

  // start a new projects document (use on Admin page) projects inside parenthesis
  startProjects: (first_name, last_name, description, technologies_used, imageUrl, projectURL, spacingForProject) => {
    // projects: projects
    return axios.post('api/projects', {first_name: first_name, last_name: last_name, description: description, technologies_used: technologies_used, imageUrl: imageUrl, projectURL: projectURL, spacingForProject: spacingForProject,}); 
  }
};
