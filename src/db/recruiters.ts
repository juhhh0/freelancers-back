import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const addRecruiter = async (data: any) => {
    const recruiter = await prisma.recruiter.create({
        data
    })
    return recruiter
}

const removeRecruiter = async (id: string) => {
    await prisma.recruiter.delete({
        where: { id }
    })
    return await getAllRecruiters()
}

const updateRecruiter = async (id: string, data: any) => {
    const recruiter = await prisma.recruiter.update({
        where: { id },
        data
    })
    return recruiter
}

const getAllRecruiters = async () => {
    const recruiters = await prisma.recruiter.findMany()
    return recruiters
}

const getRecruiterById = async (id: string) => {
    const recruiter = await prisma.recruiter.findUnique({
        where: { id }
    })
    return recruiter
}

export { getAllRecruiters, getRecruiterById, addRecruiter, removeRecruiter, updateRecruiter }