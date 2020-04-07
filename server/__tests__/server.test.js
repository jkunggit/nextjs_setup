/* eslint-env jest */
const supertest = require('supertest')
const createServer = require('../server.js')

// can mock the next like so but I have already included the next.js mock in the __mocks__ folder
// jest.mock('next', () => {
//   return jest.fn().mockImplementation(() => {
//     return {
//       prepare: () => Promise.resolve(),
//       getRequestHandler: () => (req, res) => res.send('Welcome to Next.js!')
//     }
//   })
// })

describe('server', () => {
  let httpServer, server, request
  beforeAll(async () => {
    ({ httpServer, server } = await createServer())
    request = supertest(server)
  })

  it('test route', async () => {
    const response = await request.get('/api/test')
    expect(response.status).toBe(200)
    expect(response.body.message).toMatchSnapshot()
  })

  it('test any other route', async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
  })

  // close the http server connection else it will hang
  afterAll((done) => {
    httpServer.close(done)
  })
})
