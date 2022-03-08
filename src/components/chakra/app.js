// // 1. Import the extendTheme function
// import React from "react";
// // import { extendTheme, ChakraProvider } from "@chakra-ui/react";
// // // import { Badge, Flex, Avatar, Text, Box } from "@chakra-ui/react";
// // import { Textarea, Radio, Stack, RadioGroup, Code } from "@chakra-ui/react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// import { Box, Center, Image, Flex, Badge, Text } from "@chakra-ui/react";
// import { MdStar } from "react-icons/md";

// // 2. Extend the theme to include custom colors, fonts, etc
// // const colors = {
// //   brand: {
// //     900: "#1a365d",
// //     800: "#153e75",
// //     700: "#2a69ac",
// //   },
// // };

// // const theme = extendTheme({ colors });

// // 3. Pass the `theme` prop to the `ChakraProvider`
// const App = () => {
//   const [resize, setResize] = React.useState("horizontal");

//   return (
//     <>

//       <Center h="100vh">
//         <Box p="5" maxW="320px" borderWidth="1px">
//           <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
//           <Flex align="baseline" mt={2}>
//             <Badge colorScheme="pink">Plus</Badge>
//             <Text
//               ml={2}
//               textTransform="uppercase"
//               fontSize="sm"
//               fontWeight="bold"
//               color="pink.800">
//               Verified &bull; Cape Town
//             </Text>
//           </Flex>
//           <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
//             Modern, Chic Penthouse with Mountain, City & Sea Views
//           </Text>
//           <Text mt={2}>$119/night</Text>
//           <Flex mt={2} align="center">
//             <Box as={MdStar} color="orange.400" />
//             <Text ml={1} fontSize="sm">
//               <b>4.84</b> (190)
//             </Text>
//           </Flex>
//         </Box>
//       </Center>
//     </>
//   );
// };

// export default App;
import React from "react";
import { Form } from "react-bootstrap";
import InputControl from "./inputController";

const App = () => {
  return (
    <div className="main">
      <h1>React AutoSuggestion Demo</h1>
      <div className="search-form">
        <Form>
          <InputControl
            name="country"
            label="Enter Country"
            placeholder="Type a country name"
          />
        </Form>
      </div>
    </div>
  );
};

export default App;
