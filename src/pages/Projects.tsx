import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Wrap,
  WrapItem,
  Button,
  Image,
  SimpleGrid,
  Tag,
  HStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

// Define Motion Components
const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionHeading = motion(Heading);

// Define a TypeScript type for your project data
type Project = {
  title: string;
  detailedDescription: string;
  image: string;
  tags: string[];
  tools: string[];
  sourceCode?: string;  // Optional property
  deployedLink?: string; // Optional property
};

// Project data with explicit type
const projects: Project[] = [
  {
    title: "LocalLens",
    detailedDescription:
      "LocalLens integrates various APIs to provide personalized news content. It uses AWS BedRock for data storage and Python for backend processing, significantly enhancing user engagement by providing real-time data insights.",
    image: "/locallens.png", // Replace with actual image path
    tags: ["APIs and Integrations", "Cloud Computing"],
    tools: [
      "AWS BedRock",
      "S3",
      "Streamlit",
      "Python",
      "JavaScript",
      "Laserfiche API",
    ],
    // sourceCode: "https://github.com/yourusername/locallens", // Replace with actual link
    deployedLink: "https://asksloai.calpoly.io/", // Replace with actual link
  },
  {
    title: "Gather",
    detailedDescription:
      "Gather is a web application built with React and Node.js, offering robust inventory management features. The application enhances group coordination and efficiency through role-based access control and dynamic item visibility.",
    image: "/gather.png", // Replace with actual image path
    tags: ["Full-Stack Development", "Cloud Computing"],
    tools: [
      "TypeScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB (NoSQL)",
      "Azure",
      "CI/CD",
    ],
    sourceCode: "https://github.com/Gather307/Gather", // Replace with actual link
    deployedLink: "https://thankful-tree-04ab28e1e.5.azurestaticapps.net/", // Replace with actual link
  },
  {
    title: "Playlist Analyzer",
    detailedDescription:
      "Playlist Analyzer uses the Spotify API to provide insights into user playlists. It offers detailed analytics and recommendations based on listening habits, increasing user engagement by 50% through interactive music data visualizations.",
    image: "/spotify.png", // Replace with actual image path
    tags: ["Full-Stack Development", "APIs and Integrations"],
    tools: ["Python", "Flask", "HTML/CSS", "JavaScript", "Spotify API"],
    sourceCode: "https://github.com/palldas/Spotify-Playlist-Analyzer", // Replace with actual link
  },
  {
    title: "Dog Breed Classifier",
    detailedDescription:
      "This project involves creating a convolutional neural network to accurately classify images of dog breeds. It leverages TensorFlow and Keras for model training and validation, achieving 95% accuracy in breed identification.",
    image: "/dog.png", // Replace with actual image path
    tags: ["AI/ML"],
    tools: ["Python", "TensorFlow", "Keras (Deep Learning)"],
    sourceCode: "https://github.com/palldas/Dog-Breed-Classifier", // Replace with actual link
  },
  {
    title: "Emergeny Call Classifier",
    detailedDescription:
      "Streamlined operational response times by 40% for the Seattle Police Department, in partnership with Accenture, by creating an Emergency Call Classifier using React.js, AWS Comprehend (NLP), DynamoDB, and WebSocket API, significantly boosting real-time incident management.",
    image: "/spd.png", // Replace with actual image path
    tags: ["AI/ML", "APIs and Integrations", "Cloud Computing"],
    tools: ["React.js", "Node.js", "AWS DynamoDB", "AWS S3", "AWS Lambda", "AWS Transcribe", "AWS API Gateway", "WebSocket API", "AWS Comprenend (NLP)"],
    sourceCode: "https://github.com/cal-poly-dxhub/emergency-call-classification", // Replace with actual link
    deployedLink: "https://spdcare.calpoly.io/", // Replace with actual link
  },
  {
    title: "File Texter",
    detailedDescription:
      "File Texter is an iMessage Sender that automates text message sending using Python and AppleScript on macOS. The script optimizes delivery times by implementing custom delays and message formats, boosting transmission rates by 25%.",
    image: "/text.png", // Replace with actual image path
    tags: ["APIs and Integrations", "Other"],
    tools: ["Python", "AppleScript", "macOS"],
    sourceCode: "https://github.com/palldas/iMessageSender", // Replace with actual link
  },
  {
    title: "Web Server Implementation",
    detailedDescription:
      "The web server implementation project showcases advanced systems programming techniques, including socket programming and multithreading in C. It supports HTTP GET/HEAD requests and dynamic content via CGI, improving response times by 30%.",
    image: "/cgi.png", // Replace with actual image path
    tags: ["Other", "Systems Programming", "Network Programming"],
    tools: ["C", "Unix", "HTTP Protocol"],
    sourceCode: "https://github.com/palldas/Web-Server-Implementation", // Replace with actual link
  },

  // ... other projects
];

// Updated tag options
const tags = [
  "All",
  "Full-Stack Development",
  "APIs and Integrations",
  "AI/ML",
  "Cloud Computing",
  "Other",
];

const Projects: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null); // Use Project type with | null for optional state

  const [selectedTag, setSelectedTag] = useState("All");
  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag));

  // Handle project card click
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <Box
      minH="100vh"
      bg="purple.900"
      color="white"
      py="10"
      px={{ base: 4, md: 8, lg: 20 }}
      paddingTop="90px"
    >
      {/* Header Section */}
      <VStack spacing={4} textAlign="center" mb="10">
        <MotionHeading
          as="h1"
          size="2xl"
          color="white"
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          PROJECTS
        </MotionHeading>
        <Text fontSize="lg" color="gray.300">
          Here are my personal projects that help me expand upon my knowledge
          base! These projects have also helped me identify and solve the
          problems around me — whether it be optimizing something, automating a
          trivial day-to-day task, or finding ways to solve an existing problem.
        </Text>
      </VStack>

      {/* Tag Filters */}
      <Wrap justify="center" mb="10">
        {tags.map((tag) => (
          <WrapItem key={tag}>
            <Button
              size="md"
              colorScheme={selectedTag === tag ? "purple" : "white"}
              variant={selectedTag === tag ? "solid" : "outline"}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </Button>
          </WrapItem>
        ))}
      </Wrap>

      {/* Projects Section */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {filteredProjects.map((project, index) => (
          <MotionBox
            key={index}
            bg="purple.800"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleProjectClick(project)}
            cursor="pointer"
          >
            <Box position="relative">
              <MotionImage
                src={project.image}
                alt={project.title}
                boxSize="100%"
                objectFit="cover"
                borderRadius="md"
                transition={{ duration: 0.3 }}
              />
            </Box>
            <Box p="6">
              {/* Project Title */}
              <Heading
                as="h3"
                size="md"
                color="white"
                mb="4"
                textAlign="center"
              >
                {project.title}
              </Heading>
              {/* Tools Tags */}
              <HStack spacing={2} wrap="wrap" justifyContent="center">
                {project.tools.map((tool, toolIndex) => (
                  <Tag
                    key={toolIndex}
                    size="sm"
                    colorScheme="purple"
                    variant="subtle"
                  >
                    {tool}
                  </Tag>
                ))}
              </HStack>
            </Box>
          </MotionBox>
        ))}
      </SimpleGrid>

      {/* Modal for Project Details */}
      {selectedProject && (
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
          <ModalOverlay />
          <ModalContent bg="purple.800" color="white">
            <ModalHeader>{selectedProject.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text mb={4}>{selectedProject.detailedDescription}</Text>
              <HStack spacing={2} wrap="wrap" mb={4}>
                {selectedProject.tools.map((tool, toolIndex) => (
                  <Tag
                    key={toolIndex}
                    size="sm"
                    colorScheme="purple"
                    variant="subtle"
                  >
                    {tool}
                  </Tag>
                ))}
              </HStack>
              <Box>
                {selectedProject.sourceCode && (
                  <Button
                    as={Link}
                    href={selectedProject.sourceCode}
                    isExternal
                    colorScheme="purple"
                    mr={3}
                  >
                    Source Code
                  </Button>
                )}
                {selectedProject.deployedLink && (
                  <Button
                    as={Link}
                    href={selectedProject.deployedLink}
                    isExternal
                    colorScheme="purple"
                  >
                    Deployed App
                  </Button>
                )}
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="purple" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default Projects;
