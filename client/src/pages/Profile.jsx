import React, { useEffect, useState } from "react";
import {
  Heading,
  Avatar,
  Box,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  Container,
  IconButton,
  useColorModeValue,
  StackDivider,
  Grid,
} from "@chakra-ui/react";
import { AddIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import CreatePost from "../post/createPost/CreatePost";
import Post from "../post/Poster/Post";

function Profile() {
  const navigate = useNavigate();
  const [image, setimage] = useState("");

  const userCredential = "";
  //  const NumberFormat =""
  //  const posts =""
  //  const UserPostCard =""

  return (
    <div>
      <Container maxW="5xl" mt={10}>
        <Flex gap={6} w="100%">
          <Box w={{ base: "100%", md: "75%" }}>
            <Box
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Image
                h={"200px"}
                w={"full"}
                src={
                  "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                }
                objectFit={"cover"}
              />
              <Flex pl={10}>
                <Avatar
                  mt={-12}
                  size={"2xl"}
                  bg={"blue.500"}
                  src={"https://avatars.githubusercontent.com/u/107469218?v=4"}
                  css={{ border: "2px solid white" }}
                />

                <div className="shareOptions">
                  <label htmlFor="file" className="shareOption">
                    <AddIcon ml={-4} className="shareIcon" />
                    <input
                      style={{ display: "none" }}
                      type="file"
                      id="file"
                      // accept=".png,.jpeg,.jpg"
                      onChange={(e) => setimage(e.target.files[0])}
                    />
                  </label>
                  {image && (
                    <div
                      className="shareImgContainer"
                      style={{
                        display: "flex",
                      }}
                    >
                      <img
                        src={URL.createObjectURL(image)}
                        alt=""
                        style={{
                          width: "50px",
                          borderRadius: "50px",
                          marginTop: "30px",
                        }}
                      />

                      <CloseIcon
                        // className="shareCancelImg"
                        onClick={() => setimage("")}
                        style={{
                          marginTop: "30px",
                        }}
                      />
                      <Button colorScheme='whatsapp' style={{
                        marginTop:"30px",
                        marginLeft:"100px"
                      }} >Change</Button>
                      
                    </div>
                  )}
                </div>
                {/* <IconButton
                  mt={2}
                  mr={10}
                  fontSize={"xl"}
                  aria-label="Edit"
                  bg={"#fff"}
                  _hover={{ bg: "blue.500" }}
                  icon={<EditIcon />}
                /> */}
              </Flex>

              <Box p={4}>
                <Stack
                  spacing={0}
                  pl={4}
                  align={"flex-start"}
                  mb={2}
                  letterSpacing="1.2px"
                >
                  <Flex align={"center"} gap="5">
                    <Heading
                      fontSize={"2xl"}
                      fontWeight={500}
                      whiteSpace="nowrap"
                    >
                      {userCredential.username}
                    </Heading>
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
                      <Box
                        bg="green"
                        borderRadius={"50%"}
                        h="7px"
                        w="7px"
                      ></Box>
                      <Text fontWeight={"500"}>Online</Text>
                    </Box>
                  </Flex>
                  <Text fontSize={"md"} color={"gray.800"}>
                    {userCredential.bio}
                  </Text>
                  <Text fontSize={"sm"} color={"gray.500"}>
                    {userCredential.email}
                  </Text>
                </Stack>
                <Stack pl={4} mt="2" direction={"row"} fontSize=".9em">
                  <Text
                    as={Link}
                    to={`/follow/${userCredential._id}`}
                    _hover={{ textDecoration: "underline" }}
                    fontWeight="semibold"
                    color={"blue.500"}
                  >
                    {/* {NumberFormat(userCredential.followerCount)}  */}
                    Followers
                  </Text>
                  <Text
                    as={Link}
                    to={`/follow/${userCredential._id}`}
                    _hover={{ textDecoration: "underline" }}
                    fontWeight="semibold"
                    color={"blue.500"}
                  >
                    {/* {NumberFormat(userCredential.followingCount)}  */}
                    Following
                  </Text>
                </Stack>
              </Box>
            </Box>
            <Grid
              my={"40px"}
              gap={"20px"}
              gridTemplateColumns={{
                base: `repeat(2, 1fr)`,
                md: "repeat(3, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              cursor="pointer"
            ></Grid>
          </Box>

          {/* <Box w="25%" maxH="67vh" display={{ base: "none", md: "flex" }} boxShadow={"2xl"}
            rounded={"md"} overflow={"hidden"} justifyContent="center">
            <Stack justify={"center"} divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Account
                </Heading>
                <Flex flexDir={"column"}>
                  <Text as={Link} to="/" pt="2" fontSize="sm">
                    Setting & Privacy
                  </Text>
                  <Text as={Link} to="/" pt="2" fontSize="sm">
                    Help
                  </Text>
                  <Text as={Link} to="/" pt="2" fontSize="sm">
                    Language
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Manage
                </Heading>
                <Flex flexDir={"column"}>
                  {" "}
                  <Text as={Link} to="/" pt="2" fontSize="sm">
                    Post & Activity
                  </Text>
                  <Text as={Link} to="/" pt="2" fontSize="sm">
                    Job Posting Account
                  </Text>
                  <Text as={Link} to="/" pt="2" fontSize="sm">
                    Masai School
                  </Text>
                </Flex>
              </Box>
              <Button w="100%" size="xs" border="1px solid blue" borderRadius={"10px"} bg="#fff" _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }} >
                Sign Out
              </Button>
            </Stack>
          </Box> */}
        </Flex>
        {/* <UserEditModal isOpen={isOpen} onClose={onClose} /> */}
        <Box w="80">
          <CreatePost />
        </Box>
        {/* <Post /> */}
      </Container>
    </div>
  );
}

export default Profile;
