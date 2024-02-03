import { useState } from "react";
import { ethers, BigNumber } from "ethers";
// connects to the blockchain
import roboPunksNFT from "./RoboPunksNFT.json";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

const roboPunksNFTAddress = "0x22D486D7709D008312028B2841F49599350DA2a9";

const MainMint = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // signs the transation
      const signer = provider.getSigner();
      // create new contract - specify the address
      const contract = new ethers.Contract(
        roboPunksNFTAddress,
        roboPunksNFT.abi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
        });
        console.log("response: ", response);
      } catch (error) {
        console.log("error", error);
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  };

  return (
    <Flex
      justify="center"
      align="flex-start"
      marginTop={{ base: "20px", md: "120px", lg: "150px" }}
      paddingX="10px"
    >
      <Box width="100vw">
        <div>
          <Text
            fontSize={{ base: "32px", md: "40px", lg: "56px" }}
            textShadow="0 5px #000"
          >
            RoboPunks
          </Text>
          <Text
            fontSize={{ base: "22px", md: "30px", lg: "34px" }}
            letterSpacing="-5,5%"
            fontFamily="VT323"
            textShadow="0 2px 2px #000"
          >
            It's 2078. Can the RoboPunks NFT save humans from the destructive
            rampant NFT speculation? Mint Robopunks to find out.
          </Text>
          {isConnected ? (
            <Flex justify="center" align="center" direction="column" gap="12px">
              <Flex gap="8px">
                <Button
                  backgroundColor="#fb83f8"
                  borderRadius="5px"
                  boxShadow="0 2px 2px 1px #0f0f0f"
                  color="white"
                  cursor="pointer"
                  fontFamily="inherit"
                  padding="15px"
                  marginTop="10px"
                  onClick={handleDecrement}
                >
                  -
                </Button>
                <Input
                  backgroundColor="#fb83f890"
                  readOnly
                  fontFamily="inherit"
                  width="100px"
                  height="40px"
                  textAlign="center"
                  padding="19px"
                  marginTop="10px"
                  type="number"
                  value={mintAmount}
                ></Input>
                <Button
                  backgroundColor="#fb83f8"
                  borderRadius="5px"
                  boxShadow="0 2px 2px 1px #0f0f0f"
                  color="white"
                  cursor="pointer"
                  fontFamily="inherit"
                  padding="15px"
                  marginTop="10px"
                  onClick={handleIncrement}
                >
                  +
                </Button>
              </Flex>

              <Button
                backgroundColor="#fb83f8"
                borderRadius="5px"
                boxShadow="0 2px 2px 1px #0f0f0f"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                marginTop="10px"
                onClick={handleMint}
              >
                Mint Now
              </Button>
            </Flex>
          ) : (
            <Text
              marginTop="20px"
              fontSize={{ base: "22px", md: "30px", lg: "34px" }}
              letterSpacing="-5.5%"
              fontFamily="VT323"
              textShadow="0 3px #000"
              color="#fb83f8"
            >
              You must be connected to Mint.
            </Text>
          )}
        </div>
      </Box>
    </Flex>
  );
};

export default MainMint;
