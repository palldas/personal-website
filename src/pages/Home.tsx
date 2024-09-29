import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Avatar,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelopeSquare } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const Home: React.FC = () => {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      align="center"
      justify="space-between"
      minH="100vh"
      bg="purple.900"
      px={{ base: 4, md: 8, lg: 20 }}
      pt="80px"
      color="white"
    >
      {/* Left Side Content */}
      <VStack align={{ base: "center", lg: "start" }} spacing={6} flex="1">
        <MotionHeading
          as="h1"
          size="4xl"
          fontWeight="bold"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pallavi{" "}
          <Text as="span" color="purple.400">
            Das
          </Text>
        </MotionHeading>
        <MotionBox
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Text
            fontSize="lg"
            maxW="3xl"
            textAlign={{ base: "center", lg: "left" }}
          >
            Hello! I'm a junior at California Polytechnic State University, San
            Luis Obispo 🐎, studying Computer Science with a concentration in
            AI/ML, and a minor in Statistics. My passion lies in impact-driven
            projects, and I'm captivated by the potential of Machine Learning,
            Artificial Intelligence, and Cloud Computing.
          </Text>
          <Text
            fontSize="lg"
            maxW="3xl"
            textAlign={{ base: "center", lg: "left" }}
            paddingTop={2}
          >
            Beyond personal projects, research, and internships, I spend my time
            dancing, doing yoga, and giving back to my community with the aim to
            express myself and have a positive impact on others. Let's connect!
          </Text>
        </MotionBox>
        <MotionBox
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Buttons with Links */}
          <HStack spacing={4} mb={4}>
            {" "}
            <Link href="/contact" _hover={{ textDecoration: "none" }}>
              <Button colorScheme="purple" variant="solid" size="lg">
                Contact
              </Button>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1zBhL5ZFculo6WLFJswIU7WnJJz_YwFLc/view?usp=sharing"
              _hover={{ textDecoration: "none" }}
              isExternal
            >
              {" "}
              <Button colorScheme="purple" variant="solid" size="lg">
                Resume
              </Button>
            </Link>
          </HStack>
          {/* Social Media Icons with Links */}
          <HStack
            spacing={4}
            mb={4}
            justifyContent={{ base: "center", lg: "flex-start" }}
          >
            {" "}
            {/* Aligned left for large screens */}
            <Link href="https://www.linkedin.com/in/palldas" isExternal>
              <FaLinkedin size={30} />
            </Link>
            <Link href="https://github.com/palldas" isExternal>
              <FaGithub size={30} />
            </Link>
            <Link href="mailto:padas@calpoly.edu" isExternal>
              <FaEnvelopeSquare size={30} />
            </Link>
          </HStack>
        </MotionBox>
      </VStack>

      {/* Right Side Image */}
      <Box
        borderRadius="full"
        overflow="hidden"
        borderWidth={3}
        borderColor="purple.500"
        w={{ base: "80%", md: "50%", lg: "30%" }}
        h={{ base: "80%", md: "50%", lg: "30%" }}
        flexShrink={0}
      >
        <Avatar src="/me1.png" size="full" />
      </Box>
      <Box paddingBottom={4}></Box>
    </Flex>
  );
};

export default Home;
