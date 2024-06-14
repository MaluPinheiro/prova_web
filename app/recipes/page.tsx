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
      <div>
        {dados.map((receitas) => (
          <div key={receitas.id}>
            <img
              src={receitas.image}
              width={150}
              height={150}
              alt={receitas.name}
            />
            <div>
              <Link href="/detalhes/details">{receitas.name}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}