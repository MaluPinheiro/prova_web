'use client'
import Link from 'next/link';
import { useRouter } from '@/node_modules/next/navigation';
import dados from "../../recipes.json"

export default function Receitas() {
    const router = useRouter();
  let dado = {dados}
  console.log(dados)
  return (
    <div className="min-h-screen bg-violet-200 flex-items-center justify-center p-10">
      <h1 className="text-2xl font-semibold mb-2 text-black text-center">Página de receitas!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full justify-center">
        {dados.map((receitas) => (
          <div className="justify-between" key={receitas.id}>
            <img
              src={receitas.image}
              width={150}
              height={150}
              alt={receitas.name}
            />
            <div className="text-2xl font-semibold mb-2 text-black">
              <Link href="/detalhes/details">{receitas.name}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}