export const config = {
  expireTime: '30d',
  db: {
    url: 'mongodb://localhost/27017',
  },
  secrets: {
    JWT_SECRET: 'supersupersecretdevjwtsecret',
  },
  disableAuth: true,
}
