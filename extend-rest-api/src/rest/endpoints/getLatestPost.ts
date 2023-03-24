import { Endpoint } from 'payload/config'
import getLatestPost from '../handlers/getLatestPost'

const getLatestPostEndpoint: Endpoint = {
  path: '/getLatestPost',
  method: 'get', // 'get' or 'post'
  handler: getLatestPost,
}

export default getLatestPostEndpoint
