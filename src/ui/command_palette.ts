// COMMAND_PALETTE.TS
// Code for the command palette to work

import { Command, listCommands, getCommand, runCommandFromId } from "../core/command";

const commandPalette = document.getElementById("command-palette");
const commandEntry = document.getElementById("command-input");
const commandList = document.getElementById("command-list");

export function toggleCommandPalette() {
    reloadCommandPalette();
    commandPalette?.classList.toggle("hidden");
    if (!commandPalette?.classList.contains("hidden")) {
        commandEntry?.focus()
    }
}

function reloadCommandPalette() {
    commandList!.innerHTML = "";
    let commands = listCommands();
    commands.forEach((cmd) => {
        if (getCommand(cmd)?.palette_visible) {
            let li = document.createElement("li");
            let button = document.createElement("button");

            button.onclick = () => {
                runCommandFromId(cmd);
            }
            button.innerText = getCommand(cmd)!.label;
            
            li.appendChild(button);
            commandList?.appendChild(li);
        }
    });
}