import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
import React, { FC, useMemo } from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import Tilt from "react-parallax-tilt";
import Fade from "react-reveal/Fade";
import { Link as ReactLink } from "react-router-dom";
import { useAppDispatch } from "src/globalState/stateHooks";
import {
  firebaseSignInWithPopup,
  firebaseSignOut
} from "../../services/firebaseApp";
import DrawerFooterLink from "../Link/DrawerFooterLink";

type DrawerCompenentProps = {
  isOpen: boolean;
  onClose: () => void;
  accessToken: string;
};

const DrawerCompenent: FC<DrawerCompenentProps> = ({
  isOpen,
  onClose,
  accessToken,
}) => {
  const dispatch = useAppDispatch();
  const bgColor = useColorModeValue("themeLight.bg", "themeDark.bgBody");
  const logoColor = useColorModeValue("themeLight.logo", "themeDark.logo");
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
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent backgroundColor={bgColor}>
        <DrawerHeader>
          <Flex w="100%" align="center" justify="space-between">
            <Box alignItems="center">
              <LinkBox>
                <HStack _hover={{ cursor: "pointer" }}>
                  <LinkOverlay
                    as={ReactLink}
                    to="/"
                    _focus={{ outline: "none" }}
                  >
                    <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20}>
                      <Icon as={VscGithub} w={35} h={35} color={logoColor} />
                    </Tilt>
                  </LinkOverlay>
                  <VStack>
                    <Text fontWeight="bold" lineHeight="10px" color={logoColor}>
                      TOPIC
                    </Text>
                    <Text fontWeight="bold" lineHeight="10px" color={logoColor}>
                      MANAGER
                    </Text>
                  </VStack>
                </HStack>
              </LinkBox>
            </Box>
            <Button h={10} w={10} variant="outline" m={3} onClick={onClose}>
              x
            </Button>
          </Flex>
        </DrawerHeader>

        <DrawerBody>
          <Fade top>
            <Box
              mb="10px"
              _hover={{ transform: "scale(1.02)", cursor: "pointer" }}
            >
              <Link
                as={ReactLink}
                to="/how-it-works"
                _focus={{ outline: "none" }}
                _hover={{ textDecoration: "none" }}
                fontWeight="500"
              >
                How It Works
              </Link>
            </Box>
          </Fade>
          <Fade right>
            <Text
              mb="10px"
              _hover={{ transform: "scale(1.02)", cursor: "pointer" }}
              fontWeight="500"
              onClick={
                accessToken
                  ? () => firebaseSignOut(dispatch)
                  : () => firebaseSignInWithPopup(dispatch)
              }
            >
              {accessToken ? "Log out" : "Login"}
            </Text>
          </Fade>
          <Fade bottom>
            <Box
              mb="10px"
              _hover={{ transform: "scale(1.02)", cursor: "pointer" }}
            >
              <Link
                href="https://github.com/cyrilchukwuebuka/github-topic-manager"
                _hover={{ cursor: "pointer" }}
                fontWeight="500"
              >
                Fork Repo
              </Link>
            </Box>
          </Fade>
        </DrawerBody>

        <DrawerFooter>
          <Flex
            direction="column"
            px="4px"
            py="6px"
            h="100%"
            w="100%"
            bg={bgColor}
            borderTop="1px"
            borderColor="gray.200"
            align="center"
            justify="space-between"
          >
            <Flex paddingLeft="10px" align="center" justify="center">
              <Text paddingRight="10px">© 2022</Text>
              <Box w="15px" h="15px" marginRight="10px">
                <Image w="100%" h="100%" src="/images/flag.png" />
              </Box>
            </Flex>
            <Text>Chukwuebuka Cyril Muofunanya</Text>
            <Flex align="center" justify="center" paddingRight="10px">
              {FooterLinkData.map((data) => (
                <DrawerFooterLink href={data.href} iconAs={data.iconAs} bg={data.bg} />
              ))}
            </Flex>
          </Flex>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerCompenent;
