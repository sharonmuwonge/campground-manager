import Overview from "../components/Overview"
import { Heading } from '@chakra-ui/react'

const Home = () => {

  return (
    <div>
      <header>
        <Heading as='h1' size='md'>Daily overview</Heading>
      </header>
      <main>
        <Overview />
      </main>
    </div>
  )
}

export default Home
