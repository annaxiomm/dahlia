// INDEX.TS
// "the master script"

import { getCommand, listCommands, runCommandFromId } from "./core/command";
import "./editor/editor";
import "./commands/index";
import "./ui/tab_bar";
import { getKeymap } from "./core/keymap";
import { Platform } from "./core/platform";
import { reloadTabs } from "./ui/tab_bar";

console.log(listCommands());
getCommand("command.test")?.run()


// Global keypress listener
document.body.addEventListener("keypress", (event) => {
    let id = "";
    if (Platform.isMac) {
        if (event.metaKey) {
            id += "Mod+";
        }
    } else {
        if (event.ctrlKey) {
            id += "Mod+";
        }
    }

    if (event.shiftKey) {
        id += "Shift+";
    }

    id += event.key.toLowerCase();
    if (!getKeymap(id)) {
        // Keymap not already bound
    } else {
        runCommandFromId(getKeymap(id)!.command)
    }
})

reloadTabs()