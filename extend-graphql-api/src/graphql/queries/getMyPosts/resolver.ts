import payload from 'payload'

interface ResolverArgs {}

export const Resolver = async (obj, args: ResolverArgs, { req }, info) => {
  const author = req.user

  if (!author.id) {
    throw new Error('Invalid user id')
  }

  if (author.collection !== 'users') {
    throw new Error('User could not be verified.')
  }

  const posts = await payload.find({
    collection: 'posts',
    depth: 0, // Necessary for GraphQL to be able to traverse the returned data
    limit: 100, // Optional, you could allow args to be passed in for this
    sort: '-createdAt',
    where: {
      author: {
        equals: author.id,
      },
    },
  })

  return posts
}
