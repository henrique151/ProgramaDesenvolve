import Image from "next/image";
import Link from "next/link";
import Form from "next/form";
import img from './favicon.ico'
import Script from "next/script";
import { submitFromAction } from "./actions";


export default function Home() {
  return (
      <>
      <Form action={submitFromAction}>
        <input type="text" name="username" placeholder="Digite seu nome" required  />
        <input type="number" name="age" placeholder="Digite seu age" required  />
        <button type="submit">Button</button>
      </Form>
        <Link href="/contato" replace>Contato</Link>
        <p className="text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure provident veniam aliquam laudantium pariatur omnis quis maxime corporis ea, nesciunt ipsam, praesentium, molestias earum quaerat unde dignissimos odio? Cum, tempora.</p>
        <Link href="/teste" prefetch={false}>Teste</Link>
        <Image alt="Next Logo" src="/next.svg" width={400} height={400} />
        <Image 
          alt="Next Logo" src={img} width={400} height={400}  
        />
        <Script src="https://rawgit.com/WeiChiaChang/Easter-egg/master/easter-eggs-collection.js"> 
        hi
        </Script>
      </>
  );
}
  
