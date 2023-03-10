import { chakra } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl select-none">
      <Text
        className="text-center"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Welcome to NUMEMO
      </Text>
      <div className="p-5">
        <chakra.h1 fontSize="lg" className="font-bold">
          Numemo(ぬめも）とは
        </chakra.h1>
        <Text>数をメモします</Text>
      </div>
    </div>
  );
}
