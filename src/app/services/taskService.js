import { httpAxios } from "../helper/httpHelper";

export async function addTask (task) {
    const result  = await httpAxios.post("/api/tasks",task).then((responce)=> responce.data);
    console.log(result)
    return result;
}

export async function getTasksById (userId) {
    const data = await httpAxios.get(`/api/users/${userId}/tasks`).then((responce)=> responce.data);
    console.log(data)
    return data ;
}

export async function deleteTasksById (taskId) {
    const data = await httpAxios.delete(`/api/tasks/${taskId}`).then((responce)=> responce.data);
    return data ;
}