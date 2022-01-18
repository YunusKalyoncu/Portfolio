import React from "react";
import { Stack, Text, Link } from "@chakra-ui/core";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Stack paddingBottom="10" justify="center" align="center">
      <Text>
        Powered by{" "}
        <MyLink href="https://exchangeratesapi.io/">exchangeratesapi.io</MyLink>
      </Text>
      <Text>
        © {year}{" "}
        <MyLink href="https://github.com/batuhanyigitt">Ahmet Batuhan Yiğit</MyLink>{" "}
      </Text>
    </Stack>
  );
};

export default Footer;
const MyLink = ({ href, children }) => {
  return (
    <Link
      color="blue.600"
      target="_blank"
      href={href}
      _hover={{ textDecoration: "none" }}
    >
      {children}
    </Link>
  );
};
