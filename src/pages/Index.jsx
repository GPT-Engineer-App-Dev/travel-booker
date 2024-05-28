import { Container, Text, VStack, Heading, Box, Button } from "@chakra-ui/react";
import { FaPlane, FaHotel, FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to Travel Booking</Heading>
        <Text fontSize="lg" textAlign="center">Plan your perfect trip with us. Book flights, hotels, and car rentals all in one place.</Text>
        <Box display="flex" justifyContent="space-around" width="100%">
          <Button as={Link} to="/search-flights" leftIcon={<FaPlane />} colorScheme="teal" variant="solid" size="lg">
            Book Flights
          </Button>
          <Button leftIcon={<FaHotel />} colorScheme="teal" variant="solid" size="lg">
            Book Hotels
          </Button>
          <Button leftIcon={<FaCar />} colorScheme="teal" variant="solid" size="lg">
            Rent Cars
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;