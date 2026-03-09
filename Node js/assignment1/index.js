// todo node js

import { program } from "commander";
import fs from "fs";

const DATA_FILE = "data.json";

const readFile = () => {
  const data = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(data);
};

const writeFile = (todos) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(todos, null, 2));
};

program
  .command("add")
  .description("add a todo item")
  .argument("<Item>", "to do item")
  .action((item) => {
    const todos = readFile();
    todos.push({ id: Date.now(), todo: item, done: false });
    writeFile(todos);
    console.log(`added ${item}`);
  });

program
  .command("lists")
  .description("get list of todos")
  .action(() => {
    const todos = readFile();
    if (todos.length === 0) return console.log("No todos yet");
    todos.forEach((elem) => {
      const status = elem.done ? "✅" : "❌";
      console.log(`${status} [${elem.id}] ${elem.todo}`);
    });
  });

program
  .command("delete")
  .description("delete a todo")
  .argument('<Item>', "delete itam")
  .action((item) => {
    const todo = readFile();
    const filtered = todo.filter((td) => td.todo !== item);
    if (filtered.length === todo.length) return console.log("todo not found");
    writeFile(filtered);
    console.log("todo deleted ✅");
  });

program
  .command("done")
  .description("mark as done")
  .argument('<Item>',"mark item")
  .action((item) => {
    const todos = readFile();
    const find = todos.find(td => td.todo === item);
    if(!find) return console.log("no todo found");
    find.done = true;
    writeFile(todos)
    console.log("todo mark successfully");
  });

  program.parse()
