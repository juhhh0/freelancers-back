export const typeDefs = `#graphql
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
        picture: String
        reviews: [Review!]
        role: String!
        title: String
        skills: [String!]
        available: Boolean
        token: String
    }
    type Review {
        id: ID!
        rating: Int!
        comment: String!
        freelancer: User!
        recruiter: User!
    }
    type Query {
        freelancers: [User]
        recruiters: [User]
        user(id: ID!): User
        reviews: [Review]
        review(id: ID!): Review
    }
    type Mutation {
        login(email: String!, password: String!): User
        addUser(user: AddUserInput!): User
        deleteUser(id: ID!): [User]
        addReview(review: AddReviewInput!): Review
        updateUser(id: ID!, user: UpdateUserInput!): User
        deleteReview(id: ID!): [Review]
        updateReview(id: ID!, review: UpdateReviewInput!): Review
    }
    input AddUserInput {
        name: String!
        email: String!
        password: String!
        picture: String
        role: String!
        title: String
    }
    input AddReviewInput {
        rating: Int!
        comment: String!
        freelancerId: ID!
        recruiterId: ID!
    }
    input UpdateUserInput {
        name: String
        skills: [String!]
        picture: String
        title: String
        available: Boolean
    }
    input UpdateReviewInput {
        comment: String
        rating: [String!]
    }
`