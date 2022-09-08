import CampsiteList from "../../src/components/Campsites/CampsiteList"
import Map from "../components/Campsites/Map"
import { Flex, Heading } from "@chakra-ui/react"

const Campsites = () => {
  return (
    <main>
        <Heading as='h1' size='md'>Campsites</Heading>
          < Flex w='100%' flexDirection={['column', 'column', 'column', 'row']}>
            <CampsiteList />
            <Map />
          </Flex>
    </main>    
  )
}

export default Campsites
