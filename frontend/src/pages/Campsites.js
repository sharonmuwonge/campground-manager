import CampsiteList from "../../src/components/Campsites/CampsiteList"
import Map from "../components/Campsites/Map"
import { Flex } from "@chakra-ui/react"

const Campsites = () => {
  return (
    <>
      < Flex w='100%' flexDirection={['column', 'column', 'column', 'row']}>
        <CampsiteList />
        <Map />
      </Flex>
    </>
  )
}

export default Campsites
