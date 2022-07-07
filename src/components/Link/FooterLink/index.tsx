import { Box, Icon, Link } from "@chakra-ui/react";
import React, { FC } from "react";
import { IconType } from "react-icons";

interface IFooterLink {
  href: string;
  iconAs?: IconType;
  bg: string;
}

const FooterLink: FC<IFooterLink> = ({ href, iconAs, bg }) => {
  return (
    <Box
      paddingRight="10px"
      _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
    >
      <Link  href={href} isExternal _focus={{ outline: "none" }}>
        <Icon
          as={iconAs}
          color={bg}
          w={{ base: "12px", md: "13px", lg: "14px" }}
          h={{ base: "12px", md: "13px", lg: "14px" }}
        />
      </Link>
    </Box>
  );
};

export default FooterLink;
