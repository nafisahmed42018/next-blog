export const getPostById = async (postSlug: string) => {
  const res = await fetch(`http://localhost:3000/api/posts/${postSlug}`, {
    cache: 'no-store',
  })
  // console.log(res)

  if (!res.ok) {
    throw new Error('Failed to fetch post')
  }
  return res.json()
}
