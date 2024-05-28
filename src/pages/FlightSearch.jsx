import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Heading, VStack, FormControl, FormLabel, Input, Button, Select, Box, Text } from "@chakra-ui/react";

const FlightSearch = () => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    // Mock search results
    const mockResults = [
      { id: 1, airline: "Airline A", price: "$200", duration: "3h 45m" },
      { id: 2, airline: "Airline B", price: "$250", duration: "4h 00m" },
    ];
    setResults(mockResults);
  };

  const handleSelectFlight = (flight) => {
    navigate("/booking-confirmation", { state: { flight } });
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} width="100%">
        <Heading as="h2" size="xl">Search Flights</Heading>
        <FormControl id="departure">
          <FormLabel>Departure Location</FormLabel>
          <Input type="text" value={departure} onChange={(e) => setDeparture(e.target.value)} />
        </FormControl>
        <FormControl id="arrival">
          <FormLabel>Arrival Location</FormLabel>
          <Input type="text" value={arrival} onChange={(e) => setArrival(e.target.value)} />
        </FormControl>
        <FormControl id="departure-date">
          <FormLabel>Departure Date</FormLabel>
          <Input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
        </FormControl>
        <FormControl id="return-date">
          <FormLabel>Return Date</FormLabel>
          <Input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
        </FormControl>
        <FormControl id="passengers">
          <FormLabel>Number of Passengers</FormLabel>
          <Select value={passengers} onChange={(e) => setPassengers(e.target.value)}>
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </Select>
        </FormControl>
        <Button colorScheme="teal" size="lg" onClick={handleSearch}>
          Search Flights
        </Button>
        {results.length > 0 && (
          <Box width="100%" mt={6}>
            <Heading as="h3" size="lg" mb={4}>
              Search Results
            </Heading>
            {results.map((result) => (
              <Box key={result.id} p={4} borderWidth="1px" borderRadius="md" mb={4}>
                <Text>Airline: {result.airline}</Text>
                <Text>Price: {result.price}</Text>
                <Text>Duration: {result.duration}</Text>
                <Button mt={2} colorScheme="teal" onClick={() => handleSelectFlight(result)}>
                  Select
                </Button>
              </Box>
            ))}
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default FlightSearch;