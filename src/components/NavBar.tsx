import React from "react";
import {
  Box,
  Flex,
  Button,
  IconButton,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const NavBar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="nav"
      p={4}
      bg="purple.900"
      color="white"
      justify="space-between"
      position="fixed"
      top="0"
      width="100%"
      zIndex="1000"
      alignItems="center"
    >
      <Button as={RouterLink} to="/" variant="link" colorScheme="whiteAlpha">
        <Box fontSize="2xl" fontWeight="bold">
          PD
        </Box>
      </Button>

      {/* Hamburger Menu Button */}
      <IconButton
        display={{ base: "block", lg: "none" }}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        onClick={isOpen ? onClose : onOpen}
        variant="outline"
        colorScheme="whiteAlpha"
        aria-label="Toggle Menu"
      />

      {/* Desktop Links */}
      <Flex
        gap={6}
        alignItems="center"
        display={{ base: "none", lg: "flex" }} // Hidden in mobile view
      >
        <Button as={RouterLink} to="/" variant="link" colorScheme="whiteAlpha">
          Home
        </Button>
        <Button
          as={RouterLink}
          to="/skills"
          variant="link"
          colorScheme="whiteAlpha"
        >
          Skills
        </Button>
        <Button
          as={RouterLink}
          to="/work"
          variant="link"
          colorScheme="whiteAlpha"
        >
          Experience
        </Button>
        <Button
          as={RouterLink}
          to="/projects"
          variant="link"
          colorScheme="whiteAlpha"
        >
          Projects
        </Button>
        <Button
          as={RouterLink}
          to="/contact"
          variant="link"
          colorScheme="whiteAlpha"
        >
          Contact
        </Button>
      </Flex>

      {/* Mobile Menu */}
      <Box
        position="fixed"
        top="0"
        right="0"
        width="250px"
        height="100vh"
        bg="purple.800"
        zIndex="999"
        transform={isOpen ? "translateX(0)" : "translateX(100%)"}
        transition="transform 0.3s ease-in-out"
        boxShadow="lg"
      >
        {/* Close Button */}
        <Flex justify="flex-end" p={4}>
          <IconButton
            aria-label="Close menu"
            icon={<CloseIcon />}
            onClick={onClose}
            variant="ghost"
            size="lg"
            colorScheme="whiteAlpha"
          />
        </Flex>

        {/* Menu Links */}
        <VStack spacing={6} align="start" p={4}>
          <Button
            as={RouterLink}
            to="/"
            variant="ghost"
            colorScheme="whiteAlpha"
            fontSize="lg"
            onClick={onClose} // Close the menu after clicking
          >
            Home
          </Button>
          <Button
            as={RouterLink}
            to="/skills"
            variant="ghost"
            colorScheme="whiteAlpha"
            fontSize="lg"
            onClick={onClose}
          >
            Skills
          </Button>
          <Button
            as={RouterLink}
            to="/work"
            variant="ghost"
            colorScheme="whiteAlpha"
            fontSize="lg"
            onClick={onClose}
          >
            Experience
          </Button>
          <Button
            as={RouterLink}
            to="/projects"
            variant="ghost"
            colorScheme="whiteAlpha"
            fontSize="lg"
            onClick={onClose}
          >
            Projects
          </Button>
          <Button
            as={RouterLink}
            to="/contact"
            variant="ghost"
            colorScheme="whiteAlpha"
            fontSize="lg"
            onClick={onClose}
          >
            Contact
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default NavBar;
