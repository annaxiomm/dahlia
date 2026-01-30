// INDEX.TS
// "the master script"

import { listCommands, getCommand } from "./core/command";
import "./editor/editor";
import "./commands/index";

console.log(listCommands());
getCommand("command.test")?.run()