import create from 'zustand'

import { SearchResultProps } from 'typings/SearchResultProps'

export type StoreProps = {
  query: string
  setQuery: (newQuery: string) => void
  breadcrumbs: string[]
  setBreadcrumbs: (newBreadcrumbs: string[]) => void
  searchResult: SearchResultProps | null
  setSearchResult: (payload: SearchResultProps) => void
}
export const useStore = create<StoreProps>(set => ({
  query: '',
  setQuery: newQuery => set(() => ({ query: newQuery })),
  breadcrumbs: [],
  setBreadcrumbs: newBreadcrumbs =>
    set(() => ({ breadcrumbs: newBreadcrumbs })),
  searchResult: null,
  setSearchResult: payload => set(() => ({ searchResult: payload })),
}))
