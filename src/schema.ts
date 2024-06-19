export const typeDefs = `#graphql
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
    }
    type Recruiter {
        id: ID!
        name: String!
        picture: String
        reviews: [Review!]
    }
    type Query {
        freelancers: [Freelancer]
        freelancer(id: ID!): Freelancer
        reviews: [Review]
        review(id: ID!): Review
        recruiters: [Recruiter]
        recruiter(id: ID!): Recruiter
    }
    type Mutation {
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