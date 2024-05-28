import { Container, Heading, VStack, Box, Text, Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { flight } = location.state || {};

  if (!flight) {
    return (
      <Container centerContent maxW="container.md" py={10}>
        <Heading as="h2" size="xl">No Booking Details</Heading>
        <Text mt={4}>No flight details available. Please go back and select a flight.</Text>
        <Button mt={6} colorScheme="teal" onClick={() => navigate("/search-flights")}>
          Search Flights
        </Button>
      </Container>
    );
  }

  const handleConfirmBooking = () => {
    // Logic to confirm booking
    console.log("Booking confirmed for flight:", flight);
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} width="100%">
        <Heading as="h2" size="xl">Booking Confirmation</Heading>
        <Box p={4} borderWidth="1px" borderRadius="md" width="100%">
          <Text>Airline: {flight.airline}</Text>
          <Text>Price: {flight.price}</Text>
          <Text>Duration: {flight.duration}</Text>
        </Box>
        <Button colorScheme="teal" size="lg" onClick={handleConfirmBooking}>
          Confirm Booking
        </Button>
      </VStack>
    </Container>
  );
};

export default BookingConfirmation;