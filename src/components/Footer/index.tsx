import {
  Box,
  Flex, Image, Text,
  useColorModeValue
} from "@chakra-ui/react";
import React, { FC, useMemo } from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import FooterLink from "../Link/FooterLink";

const Footer: FC<{}> = () => {
  const bgColor = useColorModeValue("themeLight.bg", "themeDark.bgBody");
  const bgInstagram = useColorModeValue("red", "white");
  const bgGithub = useColorModeValue("black", "white");
  const bgLinkedIn = useColorModeValue("#0077b5", "white");
  const bgTwitter = useColorModeValue("#1DA1F2", "white");

  const FooterLinkData = useMemo(
    () => [
      {
        href: "https://github.com/cyrilchukwuebuka",
        iconAs: VscGithub,
        bg: bgGithub,
      },
      {
        href: "https://www.instagram.com/chuk_cy/?hl=en",
        iconAs: FaInstagram,
        bg: bgInstagram,
      },
      {
        href: "https://twitter.com/hooolycode",
        iconAs: BsTwitter,
        bg: bgTwitter,
      },
      {
        href: "https://linkedin.com/in/chukwuebuka-cyril-muofunanya",
        iconAs: BsLinkedin,
        bg: bgLinkedIn,
      },
    ],
    [bgGithub, bgInstagram, bgLinkedIn, bgTwitter]
  );

  return (
    <Flex
      px="4px"
      py="6px"
      h="30px"
      w="full"
      bg={bgColor}
      borderTop="1px"
      borderColor="gray.200"
      boxShadow="sm"
      align="center"
      justify="space-between"
    >
      <Flex paddingLeft="10px" align="center" justify="center">
        <Flex align="center" justify="center">
          <Text
            textAlign="center"
            paddingRight="10px"
            fontSize={{ base: "10px", md: "12px", lg: "14px" }}
          >
            © 2022
          </Text>
          <Box
            w={{ base: "10px", md: "13px", lg: "14px" }}
            h={{ base: "10px", md: "13px", lg: "14px" }}
            marginRight="10px"
          >
            <Image w="100%" h="100%" src="/images/flag.png" />
          </Box>
        </Flex>
        <Text fontSize={{ base: "10px", md: "12px", lg: "14px" }}>
          Chukwuebuka Cyril Muofunanya
        </Text>
      </Flex>
      <Flex align="center" justify="center" paddingRight="10px">
        {FooterLinkData.map((data) => (
          <FooterLink href={data.href} iconAs={data.iconAs} bg={data.bg} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Footer;
