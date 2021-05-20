import { useStore } from 'hooks'
import { useEffect } from 'react'
import { Default as Template } from 'templates'

function Home() {
  const { setBreadcrumbs, setQuery } = useStore()

  useEffect(() => {
    setQuery('')
    setBreadcrumbs([])
  }, [setBreadcrumbs, setQuery])

  return <Template />
}

export default Home
