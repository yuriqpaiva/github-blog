import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/api'

interface PostData {
  title: string
  body: string
  created_at: string
  number: number
  user: {
    login: string
  }
  comments: number
}

export function Post() {
  const { postNumber } = useParams()

  const [post, setPost] = useState<PostData | null>(null)

  useEffect(() => {
    async function fetchPost() {
      const response = await api.get(
        `/repos/yuriqpaiva/github-blog/issues/${postNumber}`,
      )
      setPost(response.data)
    }

    fetchPost()
  }, [postNumber])

  console.log(post)

  return <h1>Post page</h1>
}
