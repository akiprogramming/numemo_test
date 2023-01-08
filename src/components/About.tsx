import { chakra } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";

const ROADMAP_TASKS = [
  { name: "ローカルDB保存", done: false },
  { name: "ログイン/DB保存", done: false },
  { name: "キーボード並び順カスタム", done: false },
];

function About() {
  return (
    <>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Welcome to NUMEMO
      </Text>
      <chakra.h1 fontSize="lg" className="font-bold">
        Numemo(ぬめも）とは
      </chakra.h1>
      <Text>主にスマホでの数をメモするのに特化しています（予定）</Text>
      <Text className="text-lg font-bold">Roadmap</Text>
      <ul>
        {ROADMAP_TASKS.map((task) => {
          return (
            <li key={task.name}>
              <input
                type="checkbox"
                className="mr-2 checked:bg-blue-500"
                checked={task.done}
              />
              {task.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default About;
