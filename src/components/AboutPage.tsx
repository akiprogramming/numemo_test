import { chakra } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";

const ROADMAP_TASKS = [
  { name: "キーボード幅調整", done: true },
  { name: "ローカルDB保存", done: false },
  { name: "ログイン/DB保存", done: false },
  { name: "キーボード並び順カスタム", done: false },
];

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
        <Text>主にスマホでの数をメモするのに特化しています（予定）</Text>
        <Text className="text-lg font-bold">Roadmap</Text>
        <ul>
          {ROADMAP_TASKS.map((task) => {
            return (
              <li key={task.name}>
                <input
                  key={task.name}
                  type="checkbox"
                  className={` mr-2  ${task.done ? "line-through" : ""}`}
                  defaultChecked={task.done}
                  readOnly
                />
                {task.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
