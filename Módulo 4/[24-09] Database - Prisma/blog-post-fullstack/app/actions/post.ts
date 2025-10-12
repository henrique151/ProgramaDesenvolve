'use server'

import { revalidatePath } from "next/cache"
import { prisma } from "../lib/prisma"
import { title } from "process"

export async function createPost(formData: FormData) {
    try {
        const title = formData.get('title') as string;
        const content = formData.get('content') as string;
        const author = formData.get('author') as string;

        if (!title || !content || !author) {
            throw new Error('Preencha todos os campos')
        }

        const post = await prisma.post.create({
            data: {
                title,
                content,
                author,
            }
        })

        revalidatePath("/")
        return { sucess: true, post }
    } catch (error) {
        console.log(error);
        return { sucess: false, message: 'Erro ao criar post' }
    }
}

export async function getPosts() {
    try {
        const posts = await prisma.post.findMany({
            orderBy: { createdAt: 'desc' },
            include: { comments: true }
        })

        return posts
    } catch (error) {
        console.log(error)
        return []
    }
}