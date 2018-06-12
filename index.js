const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
type Query {
    welcome: String!
    links: [Link!]!
}

type Link {
    id: ID!
    description: String!
    url: String!
}

`

let articleLinks = [{
        id: 'link-0',
        url: 'www.howtographql.com',
        description: 'A resources to learn graphql. Check out the advanced sections for some more in-depth tutorials.'
    }, {
        id: 'link-1',
        url: 'news.ycombinator.com',
        description: 'Hacker news is like reddit that doesn\'t suck.  Focused on tech.  Great place to improvey our chameleon skills.'
    }, {
        id: 'link-2',
        url: 'https://www.graphqlhub.com/',
        description: 'Some practice APIs to play around with queries'
    }]

const resolvers = {
    Query: {
        welcome: () => `Hacker News clone begins.`,
        links: () => articleLinks
    }

}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))