import React from 'react';
import { Flex, Box, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <Flex
      as="nav"
      p="4"
      bg="purple.900"
      color="white"
      justifyContent="space-between"
      position="fixed"
      top="0"
      width="100%"
      zIndex="1000"
    >
      <Box fontSize="2xl" fontWeight="bold">PD</Box>
      <Flex gap="6" alignItems="center">
        <Button as={Link} to="/" variant="link" colorScheme="whiteAlpha">
          Home
        </Button>
        <Button as={Link} to="/skills" variant="link" colorScheme="whiteAlpha">
          Skills
        </Button>
        <Button as={Link} to="/work" variant="link" colorScheme="whiteAlpha">
          Experience
        </Button>
        <Button as={Link} to="/projects" variant="link" colorScheme="whiteAlpha">
          Projects
        </Button>
        <Button as={Link} to="/contact" variant="link" colorScheme="whiteAlpha">
          Contact
        </Button>
      </Flex>
    </Flex>
  );
};

export default NavBar;
