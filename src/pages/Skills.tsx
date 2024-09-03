import React from 'react';
import { Box, Heading, Text, Wrap, WrapItem, Button, VStack } from '@chakra-ui/react';
import { FaPython, FaJava, FaJs, FaAws, FaDocker, FaReact, FaNodeJs, FaGitAlt, FaLinux } from 'react-icons/fa';
import { SiTypescript, SiFlask, SiMongodb, SiMysql, SiTerraform, SiMicrosoftazure, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiJira } from 'react-icons/si';
import { motion } from 'framer-motion';

// Define Motion Components
// const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionWrapItem = motion(WrapItem);

const Skills: React.FC = () => {
  return (
    <Box
      minH="100vh"
      bg="purple.900"
      color="white"
      py="10"
      px={{ base: 4, md: 8, lg: 20 }}
      paddingTop="90px"
    >
      {/* Title Section */}
      <VStack spacing={4} textAlign="center" mb="10">
        <MotionHeading as="h1" size="2xl" color="white" initial={{ y: -30 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
          SKILLS
        </MotionHeading>
        <Text fontSize="lg">
          Here is a brief overview of my technical skills that I have honed while researching, interning, or crafting a personal project.
        </Text>
      </VStack>

      {/* Skills Section */}
      <VStack spacing={10} align="stretch">
        {/* Programming Languages */}
        <Box>
          <MotionHeading as="h2" size="lg" mb="4" textAlign="center" color="purple.400" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
            Languages
          </MotionHeading>
          <Wrap justify="center" spacing="4">
            {/* Wrap each button with MotionWrapItem for animations */}
            <MotionWrapItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button leftIcon={<FaPython />} colorScheme="purple" variant="solid">Python</Button>
            </MotionWrapItem>
            <MotionWrapItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button leftIcon={<FaJava />} colorScheme="purple" variant="solid">Java</Button>
            </MotionWrapItem>
            <MotionWrapItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button leftIcon={<FaJs />} colorScheme="purple" variant="solid">JavaScript</Button>
            </MotionWrapItem>
            <MotionWrapItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button leftIcon={<SiTypescript />} colorScheme="purple" variant="solid">TypeScript</Button>
            </MotionWrapItem>
            <MotionWrapItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button leftIcon={<SiMysql />} colorScheme="purple" variant="solid">SQL</Button>
            </MotionWrapItem>
            <MotionWrapItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button leftIcon={<SiMongodb />} colorScheme="purple" variant="solid">NoSQL</Button>
            </MotionWrapItem>
            <MotionWrapItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button leftIcon={<FaJs />} colorScheme="purple" variant="solid">HTML/CSS</Button>
            </MotionWrapItem>
            <MotionWrapItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button leftIcon={<FaJs />} colorScheme="purple" variant="solid">C</Button>
            </MotionWrapItem>
            <MotionWrapItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button leftIcon={<FaJs />} colorScheme="purple" variant="solid">Go</Button>
            </MotionWrapItem>
          </Wrap>
        </Box>

        {/* Tools & Frameworks */}
        <Box>
          <MotionHeading as="h2" size="lg" mb="4" textAlign="center" color="purple.400" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
            Tools & Frameworks
          </MotionHeading>
          <Wrap justify="center" spacing="4">
            {/* Wrap each button with MotionWrapItem for animations */}
            <MotionWrapItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button leftIcon={<FaReact />} colorScheme="purple" variant="solid">React.js</Button>
            </MotionWrapItem>
            <MotionWrapItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button leftIcon={<FaNodeJs />} colorScheme="purple" variant="solid">Node.js</Button>
            </MotionWrapItem>
            <MotionWrapItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button leftIcon={<SiFlask />} colorScheme="purple" variant="solid">Flask</Button>
            </MotionWrapItem>
            <MotionWrapItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button leftIcon={<SiMysql />} colorScheme="purple" variant="solid">MySQL</Button>
            </MotionWrapItem>
            <MotionWrapItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button leftIcon={<SiMongodb />} colorScheme="purple" variant="solid">MongoDB</Button>
            </MotionWrapItem>
            <MotionWrapItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button leftIcon={<FaAws />} colorScheme="purple" variant="solid">AWS</Button>
            </MotionWrapItem>
            <MotionWrapItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button leftIcon={<SiTerraform />} colorScheme="purple" variant="solid">Terraform</Button>
            </MotionWrapItem>
            <MotionWrapItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button leftIcon={<FaDocker />} colorScheme="purple" variant="solid">Docker</Button>
            </MotionWrapItem>
            <MotionWrapItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button leftIcon={<FaGitAlt />} colorScheme="purple" variant="solid">GitHub</Button>
            </MotionWrapItem>
            <MotionWrapItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button leftIcon={<SiMicrosoftazure />} colorScheme="purple" variant="solid">Azure</Button>
            </MotionWrapItem>
            <MotionWrapItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button leftIcon={<FaLinux />} colorScheme="purple" variant="solid">Unix</Button>
            </MotionWrapItem>
            <MotionWrapItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button leftIcon={<SiTensorflow />} colorScheme="purple" variant="solid">TensorFlow</Button>
            </MotionWrapItem>
            <MotionWrapItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button leftIcon={<SiScikitlearn />} colorScheme="purple" variant="solid">Scikit-learn</Button>
            </MotionWrapItem>
            <MotionWrapItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button leftIcon={<SiPandas />} colorScheme="purple" variant="solid">Pandas</Button>
            </MotionWrapItem>
            <MotionWrapItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button leftIcon={<SiNumpy />} colorScheme="purple" variant="solid">Numpy</Button>
            </MotionWrapItem>
            <MotionWrapItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button leftIcon={<SiJira />} colorScheme="purple" variant="solid">Jira</Button>
            </MotionWrapItem>
          </Wrap>
        </Box>

        {/* Certificates */}
        <Box>
          <MotionHeading as="h2" size="lg" mb="4" textAlign="center" color="purple.400" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
            Certificates
          </MotionHeading>
          <Wrap justify="center" spacing="4">
            <MotionWrapItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button colorScheme="purple" variant="solid">AWS Certified Solutions Architect (In Progress)</Button>
            </MotionWrapItem>
            <MotionWrapItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button colorScheme="purple" variant="solid">CodePath Advanced Technical Interview Prep</Button>
            </MotionWrapItem>
          </Wrap>
        </Box>
      </VStack>
    </Box>
  );
};

export default Skills;
