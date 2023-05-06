import { PostData } from '../../pages/Home'
import {
  PostCardContainer,
  PostContent,
  PostDate,
  PostHeader,
  PostTitle,
} from './styles'
import { formatDistanceToNow, parseISO, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import removeMd from 'remove-markdown'

interface Props {
  post: PostData
}

export function PostCard({ post }: Props) {
  const date = parseISO(post.created_at)
  const fullDateFormatted = format(date, 'PPPPp', { locale: ptBR })
  const formattedDate = post.created_at.replace('Z', `-05:00`)

  const publishedDateRelativeToNow = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  }).replace('cerca de', '')

  const postBodyWithoutMarkdown = removeMd(post.body.slice(0, 174))

  return (
    <PostCardContainer>
      <PostHeader>
        <PostTitle>{post.title}</PostTitle>
        <PostDate title={fullDateFormatted} dateTime={formattedDate}>
          {publishedDateRelativeToNow}
        </PostDate>
      </PostHeader>
      <PostContent>{postBodyWithoutMarkdown}</PostContent>
    </PostCardContainer>
  )
}
