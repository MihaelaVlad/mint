import React from "react";
import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";
import Facebook from "./assets/social-media-icons/facebook_32x32.png";
import Twitter from "./assets/social-media-icons/twitter_32x32.png";
import Email from "./assets/social-media-icons/email_32x32.png";

const NavBar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }

  return (
    <Flex
      justify="space-between"
      align="center"
      padding="15px"
      direction={{ base: "column", md: "row" }}
    >
      <Flex justify="space-around">
        <Link href="https://www.facebook.com">
          <Image src={Facebook} boxSize="42px" margin="0 15px"></Image>
        </Link>

        <Link href="https://www.twitter.com">
          <Image src={Twitter} boxSize="42px" margin="0 15px"></Image>
        </Link>

        <Link href="mailto:mihaela.c.vlad@gmail.com">
          <Image src={Email} boxSize="42px" margin="0 15px"></Image>
        </Link>
      </Flex>

      <Flex justify="space-around" alignItems="center" padding="15px">
        <Box margin="0 15px" cursor="pointer">
          <Link>About</Link>
        </Box>
        <Box margin="0 15px" cursor="pointer">
          <Link>Mint</Link>
        </Box>
        <Box margin="0 15px" cursor="pointer">
          <Link>Team</Link>
        </Box>
      </Flex>

      {isConnected ? (
        <Box margin="0 15px">Connected</Box>
      ) : (
        <Button
          backgroundColor="#fb83f8"
          borderRadius="5px"
          boxShadow="0px 2px 2px 1px #0f0f0f"
          color="white"
          cursor="pointer"
          fontFamily="inherit"
          padding="15px"
          margin="0 15px"
          onClick={connectAccount}
        >
          Connect
        </Button>
      )}
    </Flex>
  );
};

export default NavBar;
