const Mock = require('mockjs')
const Random = Mock.Random

module.exports = () => {
  let data = {
    users: [],
  }

  for (let i = 1; i <= 324; i++) {
    data.users.push({
      id: i,
      name: Random.cname(),
      address: Random.cword(10, 20),
      avatar: Random.image('100x100', Random.color(), '#FFF', Random.name()),
    })
  }
  return data
}