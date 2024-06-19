import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient()

const addUser = async (data: any) => {
    const { password, email } = data

    const userExists = await prisma.user.findUnique({
        where: { email }
    })

    if(userExists) throw new Error('A user with that email already exists')


    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    data.password = hashedPassword
    
    const user = await prisma.user.create({
        data
    })
    return user
}

const removeRecruiter = async (id: string) => {
    await prisma.recruiter.delete({
        where: { id }
    })
    return await getAllUsers()
}

const updateRecruiter = async (id: string, data: any) => {
    const recruiter = await prisma.recruiter.update({
        where: { id },
        data
    })
    return recruiter
}

const getAllUsers = async () => {
    const users = await prisma.user.findMany()
    return users
}

const getUserById = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: { id }
    })
    return user
}


export { getAllUsers, getUserById, addUser }