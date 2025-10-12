'use client'
import React, { useActionState } from 'react'

export default function ContactForm({ action }: { action: any }) {
  const [state, formAction, isPending] = useActionState(action, {});
  return (
    <form action={formAction} className='space-y-4'>
      <div>
        <label
         htmlFor="name" 
         className='block text-sm font-medium text-gray-700'>
          Nome
        </label>
        <input 
          type="text" 
          name="name" 
          required
          className='mt-1 block w-full p-2 border border-gray-300 rounded'
        />
        {state?.errors?.name && (<p className='text-red-500'>
          {state?.errors?.name}
        </p>)}
      </div>

      <div>
        <label
         htmlFor="email" 
         className='block text-sm font-medium text-gray-700'>
          Email
        </label>
        <input 
          type="email" 
          name="email" 
          required
          className='mt-1 block w-full p-2 border border-gray-300 rounded'
        />
        {state?.errors?.email && (<p className='text-red-500'>
          {state?.errors?.email}
        </p>)}
      </div>

      <div>
        <label
         htmlFor="message" 
         className='block text-sm font-medium text-gray-700'>
          Mensagem
        </label>
        <input 
          type="text" 
          name="message" 
          required
          className='mt-1 block w-full p-2 border border-gray-300 rounded'
        />
        {state?.errors?.message && (<p className='text-red-500'>
          {state?.errors?.message}
        </p>)}
      </div>

      {state?.message && (
        <p className='text-red-600 text-sm'>{state?.message}</p>
      )}
      <button type='submit' disabled={isPending}>
        {isPending ? "Carregando" : "Enviar"}
      </button>
    </form>
  )
}