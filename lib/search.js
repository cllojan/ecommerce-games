import client from './client'

export default async function search(query) {
  const results = await client.fetch(`*[_type == "product" && title match "${query}"]`)
  return results
}