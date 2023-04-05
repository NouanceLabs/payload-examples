import payload from 'payload'

interface ResolverArgs {
  postId: string
}

export const AddLikeToPostResolver = async (obj, args: ResolverArgs, { req }, info) => {
  const post = await payload.findByID({
    collection: 'posts',
    id: args.postId,
  })

  if (!post.id) {
    throw new Error('Invalid post id')
  }

  const newLikeCount = ++post.likeCount

  const updatedPost = await payload.update({
    id: post.id,
    collection: 'posts',
    data: {
      likeCount: newLikeCount,
    },
  })

  return updatedPost
}
