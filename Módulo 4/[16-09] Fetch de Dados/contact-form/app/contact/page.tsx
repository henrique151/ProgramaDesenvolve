import ContactForm from "../_components/ContactForm";
import { contactAction } from "../contact/actions";

export default function ContactPage() {
    return (
        <div className="max-w-md mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-6">Nos envie uma mensagem</h1>
            <ContactForm action={contactAction} />
        </div>
    )
}