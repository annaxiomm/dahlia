import { registerCommand } from "../../core/command";

registerCommand({
    id: "core.useless",
    label: "Useless Command",
    palette_visible: true,
    run: () => {
        console.log("This is a test command");
    }
})