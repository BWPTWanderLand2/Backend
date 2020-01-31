const bcrypt = require("bcryptjs")
const db = require('../data/dbConfig')

module.exports = {
    add,
    findById,
    findBy,
}

async function add(user){
    user.password = await bcrypt.hash(user.passward,14)
    const [id] = await db("users")
    .insert(user)
  return(findById(id))
}
