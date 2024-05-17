// Update this page (the content is just a fallback if you fail and example)
// Use chakra-ui
import { Container, Text, VStack, Icon } from "@chakra-ui/react";
import { FaGlobe } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Icon as={FaGlobe} w={16} h={16} color="blue.500" />
        <Text fontSize="2xl">World Map</Text>
        <Text>Explore the world from your screen.</Text>
      </VStack>
    </Container>
  );
};

export default Index;
