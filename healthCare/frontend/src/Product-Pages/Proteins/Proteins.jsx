import React from "react";
import ProteinComp from "./ProteinComp";
import ProteinFilterComp from "./ProteinFilterComp";
import { Box, Link, Icon } from "@chakra-ui/react";
import { RiHome2Fill } from "react-icons/ri";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Proteins = () => {
  return (
    <Box>
      <Box>
        <Box w={["90%", "90%", "80%"]} m="auto">
          <Box display="flex" gap="5px" alignItems="center">
            <Link href="/">
              <Icon color="#2eb8b8" as={RiHome2Fill} />
            </Link>
            <Icon color="#2eb8b8" as={ChevronRightIcon} />
            <Link color="#2eb8b8" fontSize="14px">
              Sports Nutritions
            </Link>
            <Icon color="#2eb8b8" as={ChevronRightIcon} />
            <Link href="/products/protiens" fontSize="14px">
              Proteins
            </Link>
          </Box>
        </Box>
        <Box
          display={["none", "none", "flex"]}
          bg="white"
          color="black"
          w="95%"
          m="auto"
          justifyContent="space-between"
          pt="30px"
        >
          <Box display={["none", "none", "inline"]} w={["0%", "0%", "21%"]}>
            <ProteinFilterComp />
          </Box>
          <Box w={["95%", "95%", "78%"]}>
            <ProteinComp />
          </Box>
        </Box>
        <Box display={["inline", "inline", "none"]} w={["95%", "95%", "78%"]}>
          <ProteinComp />
        </Box>
      </Box>
    </Box>
  );
};

export default Proteins;
