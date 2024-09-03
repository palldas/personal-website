import React, { useState } from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  SimpleGrid,
  Image,
  Text,
  HStack,
  Link,
  Alert, // Import Alert component
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionHeading = motion(Heading);
const MotionBox = motion(Box);

const Contact: React.FC = () => {
  // State for handling form submission
  const [formStatus, setFormStatus] = useState<{ submitted: boolean; success?: boolean }>({ submitted: false });

  return (
    <Box
      minH="100vh"
      bg="purple.900"
      color="white"
      py="10"
      px={{ base: 4, md: 8, lg: 20 }}
      paddingTop="90px"
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {/* Image Section */}
        <Box display="flex" justifyContent="center" alignItems="center">
          <Image
            src="/contact.png" // Replace with your image path
            alt="Contact Image"
            borderRadius="md"
            objectFit="cover"
            maxW={{ base: "90%", md: "80%" }}
          />
        </Box>

        {/* Contact Form Section */}
        <VStack
          as="form"
          spacing={4}
          align="stretch"
          paddingTop="50px"
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);
            fetch("https://formsubmit.co/d423d7ef7657a315f7c43f527e7f0abd", {
              method: "POST",
              body: formData,
              headers: {
                Accept: "application/json",
              },
            })
              .then((response) => response.json())
              .then((data) => {
                if (data.success) {
                  setFormStatus({ submitted: true, success: true });
                  form.reset(); // Clear form fields
                } else {
                  setFormStatus({ submitted: true, success: false });
                }
              })
              .catch((error) => {
                setFormStatus({ submitted: true, success: false });
                alert("Error: " + error.message);
              });
          }}
        >
          <MotionHeading
            as="h1"
            size="3xl"
            fontWeight="bold"
            textAlign="center"
            initial={{ y: -30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Me{" "}
            <Text as="span" color="purple.400">
              To Connect!
            </Text>
          </MotionHeading>

          {/* Display success or error message after form submission */}
          {formStatus.submitted && (
            <Alert
              status={formStatus.success ? "success" : "error"}
              borderRadius="md"
              mb={4}
            >
              <AlertIcon />
              {formStatus.success ? (
                <AlertTitle>Message sent successfully!</AlertTitle>
              ) : (
                <AlertTitle>There was an error sending your message.</AlertTitle>
              )}
            </Alert>
          )}

          <FormControl id="name">
            <FormLabel color="white">NAME</FormLabel>
            <Input
              type="text"
              name="name"
              bg="purple.700"
              borderColor="purple.600"
              placeholder="Enter your name"
              _placeholder={{ color: "purple.300" }}
              required
            />
          </FormControl>

          <FormControl id="email">
            <FormLabel color="white">EMAIL</FormLabel>
            <Input
              type="email"
              name="email"
              bg="purple.700"
              borderColor="purple.600"
              placeholder="Enter your email"
              _placeholder={{ color: "purple.300" }}
              required
            />
          </FormControl>

          <FormControl id="message">
            <FormLabel color="white">MESSAGE</FormLabel>
            <Textarea
              name="message"
              bg="purple.700"
              borderColor="purple.600"
              placeholder="Enter your message"
              _placeholder={{ color: "purple.300" }}
              required
            />
          </FormControl>

          <Button colorScheme="purple" size="lg" mt={4} type="submit">
            LET'S CONNECT!
          </Button>
          
          <MotionBox
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HStack justifyContent="center" spacing={6} mt={6}>
              <Link href="https://www.linkedin.com/in/palldas" isExternal>
                <FaLinkedin size="30px" color="white" />
              </Link>
              <Link href="https://github.com/palldas" isExternal>
                <FaGithub size="30px" color="white" />
              </Link>
              <Link href="mailto:padas@calpoly.edu">
                <FaEnvelope size="30px" color="white" />
              </Link>
            </HStack>
          </MotionBox>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default Contact;
