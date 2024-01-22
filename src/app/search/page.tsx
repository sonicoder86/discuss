import { redirect } from 'next/navigation'
import { paths } from '@/paths'
import PostList from '@/components/posts/post-list'
import { fetchPostsBySearchTerm } from '@/db/queries/posts'

interface SearchPageProps {
  searchParams: {
    term: string
  }
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = searchParams

  if (!term) {
    redirect(paths.home())
  }

  return (
    <div>
      <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
    </div>
  )
}
