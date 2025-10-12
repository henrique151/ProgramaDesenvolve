export const posts = [
    {
        id: '1', 
        slug: 'meu-primeiro-post', 
        title: 'Meu primeiro post',
        content: 'Contéudo legal'
    }, 
    {
        id: '2', 
        slug: 'outro-post', 
        title: 'Outro post',
        content: 'Contéudo não tão legal'
    }
]

export function getPosts() {
    return posts
}

export function getPost(slug: string) {
    return posts.find(post => post.slug === slug)
}