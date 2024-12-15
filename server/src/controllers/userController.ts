import { PrismaClient } from "@prisma/client/extension"
import { Request, Response } from "express"

const prisma = new PrismaClient()

export async function getUsers(res: Response, req: Request): Promise<void> {
  try {
    const users = await prisma.user.findMany({})
    return users
  } catch (error) {
    res.status
  }
}
