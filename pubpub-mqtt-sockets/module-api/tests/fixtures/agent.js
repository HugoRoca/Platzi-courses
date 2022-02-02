const agent = {
  id: 1,
  uuid: 'yyy-yyy-yyy',
  name: 'fixture',
  username: 'fixture',
  host: 'localhost',
  pid: 0,
  connected: true,
  createdAt: new Date(),
  updateAt: new Date(),
}

const agents = [
  agent,
  extend(agent, {
    id: 2,
    uuid: 'xxxxxxxx-x-xxx-',
    connected: false,
    username: 'platzi',
  }),
  extend(agent, { id: 3, uuid: 'zzzz-yyy-cc' }),
  extend(agent, { id: 4, uuid: 'qqqqq-zz-yyy-cc', username: 'test' }),
]

function extend(obj, values) {
  const clone = Object.assign({}, obj)
  return Object.assign(clone, values)
}

module.exports = {
  single: agent,
  all: agents,
  connected: agents.filter((x) => x.connected),
  name: agents.filter((x) => x.username === 'platzi'),
  byUuid: (id) => agents.filter((x) => x.uuid === id).shift(),
  byId: (id) => agents.filter((x) => x.id === id).shift(),
}
