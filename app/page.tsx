'use client'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-violet-200 flex-items-center justify-center p-10">
      <div>
        <div className="max-w-4xl h-full bg-white shadow-xl rounded-lg p-8">
          <h1 className="text-2xl font-semibold mb-2 text-black text-center">Bem vindo ao Portal de Receitas</h1>
          <div className='flex justify-center'>
          <Link href="/recipes" className=' inline-block px-4 py-2 text-center rounded font-bold mb-2 text-black'>Receitas</Link>
          </div>
        </div>
      </div>
    </main> 
  );
}