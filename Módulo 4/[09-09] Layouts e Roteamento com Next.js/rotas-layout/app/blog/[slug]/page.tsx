import { getPost } from "@/app/_lib/data"
import { notFound } from "next/navigation"

interface BlogPostProps {
    params:{
        slug: string    
    }
}

export default function BlogPostPage({params}: BlogPostProps) {
    const post = getPost(params.slug)

    if (!post) {
        notFound()
    }


    return(
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    )
}