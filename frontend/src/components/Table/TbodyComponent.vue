<script setup lang="ts">
import type { Task } from '@/schemas/TaskSchema.ts'
import { useTasksStore } from '@/stores/tasks.ts'
import { onMounted } from 'vue'
import { TASK_UI } from '@/services/task_ui.ts'
const tasksStore = useTasksStore()
onMounted(() => {
  tasksStore.fetchTasks()
})
</script>

<template>
  <tbody>
    <tr v-for="task in tasksStore.tasks" :key="task.id">
      <th scope="row">{{ task.id }}</th>
      <td>{{ task.title }}</td>
      <td>{{ task.description }}</td>
      <td :class="TASK_UI.status[task.status]">{{ task.status }}</td>
      <td :class="TASK_UI.priority[task.priority]">{{ task.priority }}</td>
      <td>{{ new Date(task.createdAt).toLocaleDateString() }}</td>
    </tr>
  </tbody>
</template>

<style scoped>

</style>
