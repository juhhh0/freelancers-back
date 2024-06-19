import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const addFreelancer = async (data: any) => {
    const freelancer = await prisma.freelancer.create({
        data
    })
    return freelancer
}

const removeFreelancer = async (id: string) => {
    await prisma.freelancer.delete({
        where: { id }
    })
    return await getAllFreelancers()
}

const updateFreelancer = async (id: string, data: any) => {
    const freelancer = await prisma.freelancer.update({
        where: { id },
        data
    })
    return freelancer
}

const getAllFreelancers = async () => {
    const freelancers = await prisma.freelancer.findMany()
    return freelancers
}

const getFreelancerById = async (id: string) => {
    const freelancer = await prisma.freelancer.findUnique({
        where: { id }
    })
    return freelancer
}

export { getAllFreelancers, getFreelancerById, addFreelancer, removeFreelancer, updateFreelancer }