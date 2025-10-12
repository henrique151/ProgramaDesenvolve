type BlogPageProps = {
    params: {slug: string}
}


export default function BlogPage({ params }: BlogPageProps) {
    const { slug } = params;

    return (
        <div>
            <h1>Post do blog: {slug}</h1>
        </div>
    )
}