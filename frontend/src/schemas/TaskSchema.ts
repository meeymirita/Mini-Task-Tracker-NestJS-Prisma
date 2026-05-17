import { z } from 'zod'

export const TaskSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string().nullable().optional(),
  status: z.enum(['todo', 'in_progress', 'done']),
  priority: z.enum(['low', 'medium', 'high']),
  createdAt: z.string(),
})

export const AllTasksSchema = z.array(TaskSchema)

export type Task = z.infer<typeof TaskSchema>
