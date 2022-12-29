import { chakra } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";

function AboutNumemo() {
  return (
    <>
      <chakra.h1 fontSize="lg" _hover={{ bg: "green.300" }}>
        Numemo(ぬめも）とは
      </chakra.h1>
      <Text>主にスマホでの数をメモするのに特化しています（予定）</Text>
      <Box m={2}>Tomato</Box>
      <Box maxW="960px" mx="auto" />
      <Box m={[2, 3]} color="gray.50"></Box>

      <Box bg="tomato" w="100%" h="200px" />
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Welcome to NUMEMO
      </Text>
      <Box
        w="100%"
        h="200px"
        bgGradient="radial(gray.300, yellow.400, pink.200)"
      />
      <Text>Roadmap</Text>
      <ul>
        <li>ログイン/DB保存</li>
        <li>キーボード並び順カスタム</li>
        <li></li>
      </ul>
    </>
  );
}

export default AboutNumemo;
