import { useStore } from 'hooks'

export const useBreadcrumbs = () => {
  const { searchResult } = useStore(state => state)

  const breadcrumbs = searchResult?.categories || []

  return { breadcrumbs }
}
