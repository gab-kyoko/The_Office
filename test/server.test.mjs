import assert from 'node:assert/strict'
import { after, before, test } from 'node:test'
import { app } from '../server.mjs'

let server
let baseUrl

before(async () => {
  // Porta zero pede ao sistema operacional uma porta livre para o teste.
  server = app.listen(0, '127.0.0.1')
  await new Promise((resolve) => server.once('listening', resolve))
  baseUrl = `http://127.0.0.1:${server.address().port}`
})

after(() => server.close())

test('health check responde com sucesso', async () => {
  const response = await fetch(`${baseUrl}/health`)
  assert.equal(response.status, 200)
  assert.deepEqual(await response.json(), { status: 'ok' })
})

test('status informa runtime e horario calculados pelo backend', async () => {
  const response = await fetch(`${baseUrl}/api/status`)
  const payload = await response.json()

  assert.equal(response.status, 200)
  assert.equal(payload.ok, true)
  assert.match(payload.runtime, /^Node\.js v/)
  assert.ok(Date.parse(payload.serverTime))
})

test('comunicado aleatorio possui setor e texto', async () => {
  const response = await fetch(`${baseUrl}/api/message`)
  const payload = await response.json()

  assert.equal(response.status, 200)
  assert.equal(typeof payload.department, 'string')
  assert.equal(typeof payload.text, 'string')
})
