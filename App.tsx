import * as React from "react"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"

import './app.css';
import Barrasup from "./Barrasup";
import Barrasup2 from "./top";
import Top from "./top";


export const App = () => (
  
  <ChakraProvider >
    <Top/>
    <Barrasup/>
    
  </ChakraProvider>
  
)