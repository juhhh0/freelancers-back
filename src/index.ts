import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";

import { addFreelancer, getAllFreelancers, getFreelancerById, removeFreelancer, updateFreelancer } from "./db/freelancers.js";
import { addReview, getAllReviews, getReviewByFreelancerId, getReviewById, removeReview, updateReview } from "./db/reviews.js";
import { addRecruiter, getAllRecruiters, getRecruiterById, removeRecruiter, updateRecruiter } from "./db/recruiters.js";


const resolvers = {
    Query : {
        freelancers: () => getAllFreelancers(),
        freelancer: (parent, args) => getFreelancerById(args.id),
        reviews: () => getAllReviews(),
        review: (parent, args) => getReviewById(args.id),
        recruiters: () => getAllRecruiters(),
        recruiter: (parent, args) => getRecruiterById(args.id)
    },
    Freelancer: {
        reviews: (parent) => getReviewByFreelancerId(parent.id)
    },
    Review: {
        freelancer: (parent) => getFreelancerById(parent.freelancerId),
        recruiter: (parent) => getRecruiterById(parent.recruiterId)
    },
    Recruiter: {
        reviews: (parent) => getReviewByFreelancerId(parent.id)
    },
    Mutation: {
        deleteFreelancer: (parent, args) => {
            const freelancers = removeFreelancer(args.id)
            return freelancers
        },
        deleteReview: (parent, args) => {
            const reviews = removeReview(args.id)
            return reviews
        },
        deleteRecruiter: (parent, args) => {
            const recruiters = removeRecruiter(args.id)
            return recruiters
        },
        addFreelancer: (parent, args) => {
            const newFreelancer = addFreelancer(args.freelancer)
            return newFreelancer
        },
        addReview: (parent, args) => {
            const newReview = addReview(args.review)
            return newReview
        },
        addRecruiter: (parent, args) => {
            const newRecruiter = addRecruiter(args.recruiter)
            return newRecruiter
        },
        updateFreelancer: (parent, args) => {
            const freelancer = updateFreelancer(args.id, args.freelancer)
            return freelancer
        },
        updateRecruiter: (parent, args) => {
            const recruiter = updateRecruiter(args.id, args.recruiter)
            return recruiter
        },
        updateReview: (parent, args) => {
            const review = updateReview(args.id, args.review)
            return review
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log(`🚀 Server ready at ${url}`)
