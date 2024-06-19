import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createJsonWebToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });
}

const prisma = new PrismaClient()

const login = async (email: string, password: string) => {

    const user = await prisma.user.findUnique({
        where: { email }
    })
    if(!user) throw new Error('User not found')

    const match = await bcrypt.compare(password, user.password)
    if(!match) throw new Error('Incorrect password')

    const token = createJsonWebToken(user.id)

    //@ts-ignore
    user.token = token

    return user
}

const getUserByToken = async (token: string) => {
    try{

    }catch(err){
        console.log(err)
    }
}

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

const removeUser = async (id: string) => {
    await prisma.user.delete({
        where: { id }
    })
    return await getAllUsers()
}

const updateUser = async (id: string, data: any) => {
    const user = await prisma.user.update({
        where: { id },
        data
    })
    return user
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


export { getAllUsers, getUserById, addUser, removeUser, login }