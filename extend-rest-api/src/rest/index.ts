import { Endpoint } from 'payload/config'
import getLatestPostEndpoint from './endpoints/getLatestPost'

const rest: Endpoint[] = [getLatestPostEndpoint]

export default rest
