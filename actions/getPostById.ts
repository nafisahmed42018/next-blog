export const getPostById = async (postId: string) => {
  const res = await fetch(`http://localhost:3000/api/posts/${postId}`, {
    cache: 'no-store',
  })
  // console.log(res)

  if (!res.ok) {
    throw new Error('Failed to fetch post')
  }
  return res.json()
}
