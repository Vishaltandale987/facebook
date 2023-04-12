import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const LeftCompo = () => {
  return (
    <>
      <Box>
        <Card
          h="max-content"
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          mt="20px"
          border={"1px"}
          borderColor={"gray.400"}
        >
          <CardBody>
            <Box display={"flex"} justifyContent="center" alignItems={"center"}>
              <Avatar
                size="1xl"
                name="Segun Adebayo"
                src={ "https://bit.ly/3kkJrly"}
              />
            </Box>
            {/* {userCredential.online ? (
              <Box
                w="100%"
                color={"green"}
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
                gap="2"
                borderRadius="10px"
                mt="10px"
              >
                <Box bg="green" borderRadius={"50%"} h="7px" w="7px"></Box>
                <Text fontWeight={"500"}>Online</Text>
              </Box>
            ) : (
              <Box
                color={"gray"}
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
                gap="2"
                borderRadius="10px"
                mt="10px"
              >
                <Box bg="gray" borderRadius={"50%"} h="7px" w="7px"></Box>
                <Text fontWeight={"500"}>Offline</Text>
              </Box>
            )} */}
            <Stack mt="6" spacing="3">
              <Divider />
              <Text size="md" textAlign={"center"} fontWeight="bold">
                add
              </Text>
              <Text
                textAlign={"center"}
                color={"#666666"}
                _hover={{ textDecoration: "underline", cursor: "pointer" }}
              > asss
              </Text>
              <Divider />
              <Text
                color="blue.600"
                textAlign={"center"}
                fontSize="12px"
                _hover={{ textDecoration: "underline", cursor: "pointer" }}
              >
                ass
              </Text>
            
            </Stack>
          </CardBody>
        </Card>


        
      </Box>
    </>
  );
};

export default LeftCompo;
