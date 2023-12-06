import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(`${process.env.NEXT_PUBLIC_BACKEND_URI || 'https://backend.presenttill.nu' }/graphql`)

export default client;