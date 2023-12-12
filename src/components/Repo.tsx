export async function Repo() {
  const response = await fetch('http://api.github.com/users/leolive1506/repos', {
    next: {
      revalidate: 30
    }
  })

  const repos = await response.json()
  return (
    <div>
      <h1>repos</h1>
      <pre>{JSON.stringify(repos, null, 2)}</pre>
    </div>
  )
}
