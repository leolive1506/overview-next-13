import { Repo } from "@/components/Repo";
import { User } from "@/components/User";
import Link from "next/link";
import { Suspense } from "react";
export const revalidate = 30

export default function Home() {

  return (
    <div>
      <h1>Home</h1>
      <Suspense fallback={<p>Carregando usuários...</p>}>
        <User />
      </Suspense>
      <Suspense fallback={<p>Carregando repositórios...</p>}>
        <Repo />
      </Suspense>
    </div>
  )
}
