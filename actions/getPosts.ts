export const getPosts = async (page: number, category?: string) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${category || ''}`,
    {
      cache: 'no-store',
    },
  )
  // console.log(res)

  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }
  return res.json()
}
