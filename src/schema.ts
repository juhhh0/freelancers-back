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
    type Freelancer {
        id: ID!
        name: String!
        title: String!
        skills: [String!]!
        picture: String
        reviews: [Review!]
        available: Boolean!
    }
    type Review {
        id: ID!
        rating: Int!
        comment: String!
        freelancer: Freelancer!
        recruiter: Recruiter!
        user: User!
    }
    type Recruiter {
        id: ID!
        name: String!
        picture: String
        reviews: [Review!]
    }
    type Query {
        users: [User]
        user(id: ID!): User
        freelancers: [Freelancer]
        freelancer(id: ID!): Freelancer
        reviews: [Review]
        review(id: ID!): Review
        recruiters: [Recruiter]
        recruiter(id: ID!): Recruiter
    }
    type Mutation {
        login(email: String!, password: String!): User
        addUser(user: AddUserInput!): User
        deleteUser(id: ID!): [User]
        addFreelancer(freelancer: AddFreelancerInput!): Freelancer
        addReview(review: AddReviewInput!): Review
        addRecruiter(recruiter: AddRecruiterInput!): Recruiter
        deleteFreelancer(id: ID!): [Freelancer]
        deleteReview(id: ID!): [Review]
        deleteRecruiter(id: ID!): [Recruiter]
        updateFreelancer(id: ID!, freelancer: UpdateFreelancerInput!): Freelancer
        updateRecruiter(id: ID!, recruiter: UpdateRecruiterInput!): Recruiter
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
    input AddFreelancerInput {
        name: String!
        skills: [String!]!
        picture: String
        title: String!
        available: Boolean!
    }
    input AddReviewInput {
        rating: Int!
        comment: String!
        freelancerId: ID!
        recruiterId: ID!
    }
    input AddRecruiterInput {
        name: String!
        picture: String
    }
    input UpdateFreelancerInput {
        name: String
        skills: [String!]
        picture: String
        title: String
        available: Boolean
    }
    input UpdateRecruiterInput {
        name: String
        picture: String
    }
    input UpdateReviewInput {
        comment: String
        rating: [String!]
    }
`