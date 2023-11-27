import { getServerSession } from "next-auth/next"
import { options } from "./api/auth/[...nextauth]/options"

export default async function Home() {
  const session = await getServerSession(options)
  return (
    <div>
      {session ? 
      <h1 className="text-5xl">{session.user?.name}</h1> :
       <h1 className="text-5xl">你还没登录</h1>
      }
    </div>
  )
}
