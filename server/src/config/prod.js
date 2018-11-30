const { MONGO_ADMIN, MONGO_ADMIN_PASSWORD } = process.env

export const config = {
  port: 8008,
  db: {
    url: `mongodb://${MONGO_ADMIN}:${MONGO_ADMIN_PASSWORD}@ds121814.mlab.com:21814/backend-project-week`
  },
}