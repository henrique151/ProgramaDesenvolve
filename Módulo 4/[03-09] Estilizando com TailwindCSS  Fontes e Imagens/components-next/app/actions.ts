'use server'

export async function submitFromAction(formData: FormData) {
    const name = formData.get('username')
    const age = formData.get('age')
    if(name?.toString().includes("e")) {
        console.log('O nome possui a Letra E')
    } else {
        console.log('O nome não possui a letra E')
    }
    console.log("Seu nome ", name)
}