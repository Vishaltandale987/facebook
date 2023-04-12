import { Box } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux';
import LeftCompo from '../post/LeftCompo/LeftCompo'
import MainPost from '../post/mainpost/MainPost'

function Home() {
  const { data } = useSelector((store) => store.userMangerdata);
  console.log(data)

  return (
    <div>
      <Box w="88%" h="120vh" m="auto" display="flex" gap="5">
        <Box
          w="25%"
          display={{ base: "none", sm: "none", md: "none", lg: "block" }}
        >
          <LeftCompo />
        </Box>
        <Box flex={1} h="100%" overflowY={"scroll"} className="scroll-hidden">
          <MainPost />
        </Box>
        <Box
          w="25%"
          display={{ base: "none", sm: "none", md: "none", lg: "block" }}
        >
          {/* <RightCompo /> */}
        </Box>
      </Box>
    </div>
  )
}

export default Home
