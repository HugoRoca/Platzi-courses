module.exports = function setupAgent(AgentModel) {
  function findById(id) {
    return AgentModel.findById(id)
  }

  async function createOrUpdate(agent) {
    const cond = {
      where: {
        uuid: agent.uuid,
      },
    }

    const existingAgent = await AgentModel.findOne(cond)

    if (existingAgent) {
      const updated = await AgentModel.update(agent, cond)
      return updated ? AgentModel.findOne(cond) : existingAgent
    }

    const result = await AgentModel.create(agent)
    return result.toJSON()
  }

  function findByUuid(uuid) {
    return AgentModel.findOne({
      where: { uuid },
    })
  }

  function findAll() {
    return AgentModel.findAll()
  }

  function findConnected() {
    return AgentModel.findAll({
      where: { connected: true },
    })
  }

  function findByUsername(username) {
    return AgentModel.findAll({
      where: username,
      connected: true,
    })
  }

  return {
    findById,
    createOrUpdate,
    findByUuid,
    findAll,
    findConnected,
    findByUsername,
  }
}
