import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const addReview = async (data: any) => {
    const review = await prisma.review.create({
        data
    })
    return review
}

const removeReview = async (id: string) => {
    await prisma.review.delete({
        where: { id }
    })
    return await getAllReviews()
}

const updateReview = async (id: string, data: any) => {
    const review = await prisma.review.update({
        where: { id },
        data
    })
    return review
}

const getAllReviews = async () => {
    const reviews = await prisma.review.findMany()
    return reviews
}

const getReviewById = async (id: string) => {
    const review = await prisma.review.findUnique({
        where: { id }
    })
    return review
}

const getReviewByFreelancerId = async (freelancerId: string) => {
    const reviews = await prisma.review.findMany({
        where: { freelancerId }
    })
    return reviews
}

const getReviewByUserId = async (userId: string) => {
    const reviews = await prisma.review.findMany({
        where: { 
            OR: [
                { recruiterId: userId },
                { freelancerId: userId }
            ]
        } 
    })
    return reviews
}

const getReviewsByRecruiterId = async (recruiterId: string) => {
    const reviews = await prisma.review.findMany({
        where: { recruiterId }
    })
    return reviews

}

export { getAllReviews, getReviewById, addReview, removeReview, updateReview, getReviewByFreelancerId, getReviewsByRecruiterId, getReviewByUserId }