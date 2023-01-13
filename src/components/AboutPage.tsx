import { chakra } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const ROADMAP_TASKS = [
  { name: "キーボード幅自動調整", done: true },
  { name: "ローカルDB保存", done: false },
  { name: "ログイン/DB保存", done: false },
  { name: "キーボード並び順カスタム", done: false },
  { name: "ダークモード対応", done: false },
  { name: "小数点対応", done: false },
  { name: "カッコ対応", done: false },
  { name: "コメント対応", done: false },
  { name: "変数対応", done: false },
  { name: "タブ機能", done: false },
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
        <Text>数をメモします</Text>
        <Text className="text-lg font-bold">Roadmap</Text>
        <ul>
          {ROADMAP_TASKS.map((task) => {
            return (
              <li key={task.name}>
                <input
                  key={task.name}
                  type="checkbox"
                  className="mr-2"
                  defaultChecked={task.done}
                  readOnly
                />
                <label
                  htmlFor=""
                  className={`${task.done ? "line-through" : ""}`}
                >
                  {task.name}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
