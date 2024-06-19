export const typeDefs = `#graphql
    type Freelancer {
        id: ID!
        name: String!
        skills: [String!]!
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
    }
    type Recruiter {
        id: ID!
        name: String!
    }
    type Query {
        freelancers: [Freelancer]
        reviews: [Review]
        recruiters: [Recruiter]
    }
`;
