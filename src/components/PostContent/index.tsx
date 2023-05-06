import { PostContentContainer } from './styles'
import ReactMarkdown from 'react-markdown'

interface Props {
  body: string
}

export function PostContent({ body }: Props) {
  return (
    <PostContentContainer>
      <ReactMarkdown linkTarget="_blank">{body}</ReactMarkdown>
    </PostContentContainer>
  )
}
