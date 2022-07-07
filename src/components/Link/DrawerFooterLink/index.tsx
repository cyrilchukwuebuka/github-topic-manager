import { Box, Icon, Link } from "@chakra-ui/react";
import React, { FC } from "react";
import { IconType } from "react-icons";

interface IDrawerFooterLink {
  href: string;
  iconAs: IconType;
  bg: string;
}

const DrawerFooterLink: FC<IDrawerFooterLink> = ({ href, iconAs, bg }) => {
  return (
    <Box
      paddingRight="10px"
      _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
    >
      <Link
        href={href}
        isExternal
        _focus={{ outline: "none" }}
      >
        <Icon as={iconAs} color={bg} />
      </Link>
    </Box>
  );
};

export default DrawerFooterLink;
