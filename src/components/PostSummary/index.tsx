import {
  FaAngleLeft,
  FaCalendarDay,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'
import {
  PostSummaryLink,
  PostSummaryContainer,
  PostSummaryHeader,
  PostTitle,
  PostStatsContainer,
  PostStatsItem,
} from './styles'
import { format, formatDistanceToNow, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface Props {
  post: {
    title: string
    created_at: string
    number: number
    user: {
      login: string
    }
    html_url: string
    comments: number
  }
}

export function PostSummary({ post }: Props) {
  const date = parseISO(post.created_at)
  const fullDateFormatted = format(date, 'PPPPp', { locale: ptBR })
  const formattedDate = post.created_at.replace('Z', `-05:00`)

  const publishedDateRelativeToNow = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  }).replace('cerca de', '')

  return (
    <PostSummaryContainer>
      <PostSummaryHeader>
        <PostSummaryLink to="/">
          <FaAngleLeft />
          Voltar
        </PostSummaryLink>
        <PostSummaryLink to={post.html_url || ''} target="_blank">
          Ver no Github
          <FaExternalLinkAlt />
        </PostSummaryLink>
      </PostSummaryHeader>
      <PostTitle>{post.title}</PostTitle>

      <PostStatsContainer>
        <PostStatsItem>
          <FaGithub />
          <span>{post?.user.login}</span>
        </PostStatsItem>
        <PostStatsItem>
          <FaCalendarDay />
          <time dateTime={formattedDate} title={fullDateFormatted}>
            {publishedDateRelativeToNow}
          </time>
        </PostStatsItem>
        <PostStatsItem>
          <FaComment />
          <span>{post.comments} comentários</span>
        </PostStatsItem>
      </PostStatsContainer>
    </PostSummaryContainer>
  )
}
