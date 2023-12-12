import { cookies, headers } from 'next/headers'
export async function User() {
  await new Promise(resolve => setTimeout(resolve, 200))
  const userCookies = cookies()
  const userHeaders = headers()

  return (
    <div>
      <h1>User</h1>
      <pre>{JSON.stringify(userCookies, null, 2)}</pre>
      <pre>{JSON.stringify(userHeaders, null, 2)}</pre>
    </div>
  )
}
