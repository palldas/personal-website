import React from 'react';
import { Box, Heading, Text, VStack, SimpleGrid, Tag, HStack, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';


const MotionHeading = motion(Heading);


// Updated work experiences with image URLs
const workExperiences = [
  {
    company: 'Pacific Gas and Electric Company (PG&E)',
    title: 'Software Engineering Intern',
    duration: 'June 2024 - September 2024',
    description: 'As a PG&E SWE Intern on the Cloud Platform Engineering Team, I developed a Terraform composite web module for AWS EC2featuring an Auto Scaling Group scheduler with customer-friendly time inputs, optimizing scalability, enhancing resource management, and significantly reducing cloud infrastructure costs. Additionally, I created a comprehensive Terraform implementation runbook for Cloud DevOps partners, which accelerated the onboarding process and facilitated faster cloud adoption, boosting operational efficiency. To maintain adherence to SDLC methodologies, I utilized industry-leading project management tools such as Jira, driving an efficient Agile development workflow and improving team collaboration and productivity.',
    skills: ['JavaScript', 'React', 'Node.js', 'Google Cloud Platform', 'Kubernetes'],
    image: '/pge2.png',  // Replace with the actual image path
  },
  {
    company: 'Cal Poly Digital Transformation Hub - Powered by AWS',
    title: 'Junior Software Developer',
    duration: 'July 2023 - Present',
    description: "As a Junior Developer at the AWS DxHub, I've worked with various customers to build scalable solutions using the latest technologies to solve important challenges in the public sector. I built an innovative Media Search Finder for the World Bank utilizing AWS Amplify, Kendra, Transcribe, Lambda, S3, and Python scripts. This tool introduced speaker detection and timestamping features, which led to a 90% reduction in content search time. Additionally, I streamlined operational response times by 40% for the Seattle Police Department in collaboration with Accenture by developing an Emergency Call Classifier. This classifier, built with React.js, AWS Comprehend for natural language processing (NLP), DynamoDB, and WebSocket API, significantly enhanced real-time incident management capabilities.",
    skills: ['Python', 'Amazon Web Services (AWS)', 'JavaScript', 'React.js', 'DynamoDB', 'Serverless Architecture', 'Agile Methodologies', 'AWS S3', 'AWS Lambda',],
    image: '/dxhub.png',  // Replace with the actual image path
  },
  {
    company: 'Cal Poly College of Engineering',
    title: 'Undergraduate Student Researcher',
    duration: 'June 2023 - June 2024',
    description: "I developed a full-stack, block-based programming platform using TypeScript and React.js, incorporating real-time collaborative capabilities through WebSockets. This platform allows teachers to monitor and interact with students effectively, resulting in a 70% increase in student engagement. To enhance the platform's reliability and user experience, I utilized a Firebase back-end database for seamless authentication, storage, and deployment. This approach contributed to an 83% rise in interest in computer science among underrepresented students. Additionally, I led the integration of the Bilingual Networked Robotics Teaching Platform into local elementary and middle schools, which expanded access to over 150 students and significantly improved computational thinking education throughout San Luis Obispo.",
    skills: ['React.js', 'JavaScript', 'TypeScript', 'Firebase', 'WebSockets', 'Research'],
    image: '/eng.png',  // Replace with the actual image path
  },
  // Add more work experiences as needed
];

const Work: React.FC = () => {
  return (
    <Box minH="100vh" bg="purple.900" color="white" py="10" px={{ base: 4, md: 8, lg: 20 }} paddingTop="90px">
      {/* Header Section */}
      <VStack spacing={4} textAlign="center" mb="10">
      <MotionHeading as="h1" size="2xl" color="white" initial={{ y: -30 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>PROFESSIONAL EXPERIENCE</MotionHeading>
        <Text fontSize="lg" color="gray.300">
          Here is a summary of my professional experience, including roles, responsibilities, and skills developed across different internships and research opportunities.
        </Text>
      </VStack>

      {/* Work Experience Section */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={8}>
        {workExperiences.map((experience, index) => (
          <Box
            key={index}
            bg="purple.800"
            borderRadius="lg"
            p="6"
            boxShadow="lg"
          >
            {/* Image Section */}
            <Image
              src={experience.image}
              alt={`${experience.company} logo`}
              borderRadius="md"
              mb={4}
              objectFit="cover"
              w="100%"
              h="50%"
            />
            {/* Work Experience Details */}
            <Heading as="h3" size="md" mb="2" color="white">{experience.company}</Heading>
            <Text fontWeight="bold" color="purple.300">{experience.title}</Text>
            <Text fontSize="sm" mb="4" color="gray.400">{experience.duration}</Text>
            <Text mb="4">{experience.description}</Text>
            <HStack spacing={2} wrap="wrap">
              {experience.skills.map((skill, skillIndex) => (
                <Tag key={skillIndex} size="sm" colorScheme="purple" variant="subtle">
                  {skill}
                </Tag>
              ))}
            </HStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Work;
