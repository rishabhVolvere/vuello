import { uuid } from '@/utils'
export const defaultBoard = {
  name: 'Board',
  columns: [
    {
      title: 'To Do',
      tasks: [
        {
          id: uuid(),
          name: 'Tidy the room.',
          description: ''
        },
        {
          id: uuid(),
          name: 'Feed the dog.',
          description: ''
        }
      ]
    },
    {
      title: 'Done',
      tasks: [
        {
          id: uuid(),
          name: 'Complete the assignment.',
          description: ''
        }
      ]
    }
  ]
}
