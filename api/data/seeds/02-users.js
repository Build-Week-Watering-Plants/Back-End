exports.seed = function (knex) {
  return knex('users').insert([
    {
      username: "jax",
      password: "123",
      phoneNumber: '7863329320'
    },
    {
      username: "max",
      password: "123",
      phoneNumber: '9542341234'
    },
    {
      username: "fax",
      password: "123",
      phoneNumber: '7542341236'
    },
    {
      username: "doug",
      password: "123",
      phoneNumber: '6542341232'
    },
  ])
}