import { useParams } from 'react-router-dom'

export function Post() {
  const { postId } = useParams()

  console.log(postId)

  return <h1>Post page</h1>
}
