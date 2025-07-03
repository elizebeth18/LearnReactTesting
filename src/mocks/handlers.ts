import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get('https://api.example.com/user', () => {
    return HttpResponse.json({
      id: 'abc-123',
      firstName: 'John',
      lastName: 'Maverick',
    })
  }),
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return HttpResponse.json([
        {
          name: 'Bruce Wayne',
        },
        {
          name: 'Clark Kent',
        },
        {
          name: 'Princess Diana',
        },
      ])
    }),
]