import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@chakra-ui/icons";

const MotionBox = motion(Box);

export default function UpgradePage() {
  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-r, purple.500, pink.400)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="white"
      p={8}
    >
      <MotionBox
        p={10}
        bg="rgba(255, 255, 255, 0.1)"
        borderRadius="2xl"
        boxShadow="xl"
        textAlign="center"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <VStack spacing={6}>
          <MotionBox
            initial={{ rotate: -20, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 200 }}
          >
            <CheckCircleIcon w={16} h={16} color="green.300" />
          </MotionBox>

          <Heading fontSize="4xl">Upgrade to PRO 🚀</Heading>
          <Text fontSize="lg" maxW="400px">
            Unlock <b>unlimited notes</b>, premium features, and priority support.
          </Text>

          <MotionBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              colorScheme="yellow"
              borderRadius="full"
              px={8}
              py={6}
              fontSize="xl"
              shadow="md"
              onClick={() => alert("Dummy Payment Gateway 🚧")}
            >
              Upgrade Now ✨
            </Button>
          </MotionBox>
        </VStack>
      </MotionBox>
    </Box>
  );
}
