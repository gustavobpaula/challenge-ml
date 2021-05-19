import { useStore } from 'hooks'

export const useBreadcrumbs = () => {
  const { breadcrumbs } = useStore(state => state)

  return { breadcrumbs }
}
