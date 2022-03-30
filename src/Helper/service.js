import axios from 'axios';

// Get the list of user.
export const getUserList = async() => {
    const url = `form/v1/user?${Date.now()}`;
    let user_data;
    try {
        user_data = await axios.get(url);
    } catch(err) {
        console.log(err);
    }
    return user_data;
}

// Get the list of user.
export const getUser = async(name) => {
    const url = `form/v1/user?name=${name}&${Date.now()}`;
    let user_data;
    try {
        user_data = await axios.get(url);
    } catch(err) {
        console.log(err);
    }
    return user_data;
}

// Create the user.
export const createUser = async(params) => {
    const url = `form/v1/user?${Date.now()}`;
    let user_data;
    try {
        user_data = await axios.post(url, params);
    } catch(err) {
        console.log(err);
    }
    return user_data;
}

// Update the User
export const updateUser = async(params) => {
    const url = `form/v1/user?${Date.now()}`;
    let user_data;
    try {
        user_data = await axios.put(url, params);
    } catch(err) {
        console.log(err);
    }
    return user_data;
}

// Delete the User
export const deleteUser = async(user_id) => {
    const url = `form/v1/user?user_id=${user_id}&${Date.now()}`;
    let user_data;
    try {
        user_data = await axios.delete(url);
    } catch(err) {
        console.log(err);
    }
    return user_data;
}


// Get the list of Project.
export const getProjects = async() => {
    const url = `form/v1/project?${Date.now()}`;
    let project_data;
    try {
        project_data = await axios.get(url);
    } catch(err) {
        console.log(err);
    }
    return project_data;
}

// Create the Project.
export const createProject = async(params) => {
    const url = `form/v1/project?${Date.now()}`;
    let project_data;
    try {
        project_data = await axios.post(url, params);
    } catch(err) {
        console.log(err);
    }
    return project_data;
}

// Update the Project
export const updateProject = async(params) => {
    const url = `form/v1/project?${Date.now()}`;
    let project_data;
    try {
        project_data = await axios.put(url, params);
    } catch(err) {
        console.log(err);
    }
    return project_data;
}

// Delete the Project
export const deleteProject = async(project_id) => {
    const url = `form/v1/project?project_id=${project_id}&${Date.now()}`;
    let project_data;
    try {
        project_data = await axios.delete(url);
    } catch(err) {
        console.log(err);
    }
    return project_data;
}

// Get the list of Tasks.
export const getProjectTasks = async() => {
    const url = `form/v1/projectTask?${Date.now()}`;
    let task_data;
    try {
        task_data = await axios.get(url);
    } catch(err) {
        console.log(err);
    }
    return task_data;
}

// Create the Tasks.
export const createProjectTasks = async(params) => {
    const url = `form/v1/projectTask?${Date.now()}`;
    let task_data;
    try {
        task_data = await axios.post(url, params);
    } catch(err) {
        console.log(err);
    }
    return task_data;
}

// Update the Tasks
export const updateProjectTasks = async(params) => {
    const url = `form/v1/projectTask?${Date.now()}`;
    let task_data;
    try {
        task_data = await axios.put(url, params);
    } catch(err) {
        console.log(err);
    }
    return task_data;
}

// Delete the Tasks
export const deleteProjectTask = async(task_id) => {
    const url = `form/v1/projectTask?task_id=${task_id}&${Date.now()}`;
    let task_data;
    try {
        task_data = await axios.delete(url);
    } catch(err) {
        console.log(err);
    }
    return task_data;
}