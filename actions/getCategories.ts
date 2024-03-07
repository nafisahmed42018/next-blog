export const getCategories = async () => {
  const res = await fetch('http://localhost:3000/api/categories', {
    cache: 'no-store',
  })
  // console.log(res)

  if (!res.ok) {
    throw new Error('Failed to fetch categories')
  }
  return res.json()
}
