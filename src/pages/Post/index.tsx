import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/api'
import { PostSummary } from '../../components/PostSummary'
import { PostContent } from '../../components/PostContent'
import { PostContainer } from './styles'

interface PostData {
  title: string
  body: string
  created_at: string
  number: number
  user: {
    login: string
  }
  comments: number
  html_url: string
}

export function Post() {
  const { postNumber } = useParams()

  const [post, setPost] = useState<PostData | null>(null)

  useEffect(() => {
    if (post) {
      document.title = post.title
    }
  }, [post])

  useEffect(() => {
    async function fetchPost() {
      const response = await api.get(
        `/repos/yuriqpaiva/github-blog/issues/${postNumber}`,
      )
      setPost(response.data)
    }

    fetchPost()
  }, [postNumber])

  if (!post) return null

  return (
    <PostContainer>
      <PostSummary post={post} />
      <PostContent body={post.body} />
    </PostContainer>
  )
}
