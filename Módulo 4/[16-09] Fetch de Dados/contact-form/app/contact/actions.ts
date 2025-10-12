'use server'

import { redirect } from "next/navigation";


function validateContractForm(formData: FormData) {
    const errors: Record<string, string> = {};

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || name.trim().length < 2) {
        errors.name = "o nome precisa ter pelo menos 2 caracteres"
    }

    
    if (!email || !email.includes('@')) {
        errors.email = "Por favor, insira um email válido"
    }

    if (!message || message.trim().length < 10) {
        errors.message = "Mensagem precida ser ter pelo menos 10 caracteres"
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
        data: {
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
        }
    }
} 

export async function contactAction(prevState: any, formData: FormData ) {
    const validation = validateContractForm(formData);

    if(!validation.isValid) {
        return {
            errors: validation.errors,
            message: "Por favor, corrija os erros."
        }
    }

    console.log("Dados enviados: ", validation.data)

    redirect("/contact/success")
}
