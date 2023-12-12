import { Repo } from "@/components/Repo";
import { User } from "@/components/User";
import Link from "next/link";
export const revalidate = 30

export default function Home() {

  return (
    <div>
      <h1>Home</h1>
      <User />
      {/* <Repo /> */}
    </div>
  )
}
