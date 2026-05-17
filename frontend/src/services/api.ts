import axios from 'axios'

export const API_ROUTES = {
  // tasks
  findAll: '/tasks',
  create: '/tasks',

  findOne: (id: number) => `/tasks/${id}`,

  updateTask: (id: number) => `/tasks/${id}`,
  deleteTask: (id: number) => `/tasks/${id}`,

  // status
  findByStatus: (status: string) => `/tasks/status/${status}`,
  updateStatus: (id: number, status: string) => `/tasks/status/${id}/${status}`,

  // priority
  findByPriority: (priority: string) => `/tasks/priority/${priority}`,
  updatePriority: (id: number, priority: string) => `/tasks/priority/${id}/${priority}`,

  // priority и status
  findByPriorityAndStatus: (priority: string, status: string) =>
    `/tasks/priority/${priority}/status/${status}`,
}
export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  withCredentials: true,
})
