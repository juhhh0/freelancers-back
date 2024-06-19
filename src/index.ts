import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";

import { addReview, getAllReviews, getReviewByFreelancerId, getReviewById, getReviewByUserId, removeReview, updateReview } from "./db/reviews.js";
import { addUser, getAllFreelancers, getAllRecruiters, getAllUsers, getUserById, login, removeUser, updateUser } from "./db/users.js";


const resolvers = {
    Query : {
        user: (parent, args) => getUserById(args.id),
        freelancers: () => getAllFreelancers(),
        reviews: () => getAllReviews(),
        review: (parent, args) => getReviewById(args.id),
        recruiters: () => getAllRecruiters(),
    },
    User: {
        reviews: (parent) => getReviewByUserId(parent.id)
    },
    Review: {
        freelancer: (parent) => getUserById(parent.freelancerId),
        recruiter: (parent) => getUserById(parent.recruiterId),
    },
    Mutation: {
        login: (parent, args) => login(args.email, args.password),
        deleteUser: (parent, args) => {
            const users = removeUser(args.id)
            return users
        },
        deleteReview: (parent, args) => {
            const reviews = removeReview(args.id)
            return reviews
        },
        addUser: (parent, args) => {
            const newUser = addUser(args.user)
            return newUser
        },
        addReview: (parent, args) => {
            const newReview = addReview(args.review)
            return newReview
        },
        updateUser: (parent, args) => {
            const user = updateUser(args.id, args.user)
            return user
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

const context = async ({req, res}) => {
    const token = req.headers.authorization || '';

    // const user = await getUserByToken(token);

    // if (!user) {
    //     throw new Error('Not authenticated');
    // }

    // return { user };
}

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log(`🚀 Server ready at ${url}`)
