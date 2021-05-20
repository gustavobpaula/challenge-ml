import { useStore } from 'hooks'
import { useEffect } from 'react'
import { Default as Template } from 'templates'

function Home() {
  const { setBreadcrumbs } = useStore()

  useEffect(() => {
    setBreadcrumbs([])
  }, [setBreadcrumbs])

  return <Template />
}

export default Home
