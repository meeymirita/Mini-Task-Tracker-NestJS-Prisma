import { defineStore } from 'pinia'
import { ref } from 'vue'
import { API_ROUTES, httpClient } from '@/services/api'
import { type Task, AllTasksSchema } from '@/schemas/TaskSchema'

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref<Task[]>([])
  const fetchTasks = async () => {
    const res = await httpClient.get(API_ROUTES.findAll)
    tasks.value = AllTasksSchema.parse(res.data)
  }
  return { tasks, fetchTasks}
})
