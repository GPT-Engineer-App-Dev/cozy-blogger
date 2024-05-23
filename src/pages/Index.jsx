import { Box, Container, Flex, Heading, Text, VStack, Link, HStack, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.100" p={4} borderRadius="md" mb={6}>
        <HStack spacing={8}>
          <Link as={RouterLink} to="/" fontWeight="bold">Home</Link>
          <Link as={RouterLink} to="/about">About</Link>
          <Link as={RouterLink} to="/blog">Blog</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
        </HStack>
        <Spacer />
      </Flex>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to My Blog</Heading>
          <Text fontSize="lg">A place where I share my thoughts and experiences.</Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>Recent Posts</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Post Title 1</Heading>
              <Text fontSize="sm" color="gray.500">January 1, 2023</Text>
              <Text mt={2}>This is a short excerpt from the first blog post...</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Post Title 2</Heading>
              <Text fontSize="sm" color="gray.500">February 1, 2023</Text>
              <Text mt={2}>This is a short excerpt from the second blog post...</Text>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;