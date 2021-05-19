import create from 'zustand'

export type StoreProps = {
  query: string
  setQuery: (newQuery: string) => void
  breadcrumbs: string[]
  setBreadcrumbs: (newBreadcrumbs: string[]) => void
}
export const useStore = create<StoreProps>(set => ({
  query: '',
  setQuery: newQuery => set(() => ({ query: newQuery })),
  breadcrumbs: [],
  setBreadcrumbs: newBreadcrumbs =>
    set(() => ({ breadcrumbs: newBreadcrumbs })),
}))
