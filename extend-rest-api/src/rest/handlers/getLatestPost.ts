import { Endpoint } from 'payload/config'

const getLatestPost: Endpoint['handler'] = async ({ user, ...req }, res, next) => {
  const payload = req.payload

  const {
    docs: [latestPost],
  } = await payload.find({
    collection: 'posts',
    sort: '-createdAt',
  })

  res.status(200).send(latestPost)
}

export default getLatestPost
