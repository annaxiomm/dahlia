import { registerCommand } from "../../core/command";

registerCommand({
    id: "core.another",
    label: "Another Useless Command",
    palette_visible: true,
    run: () => {
        console.error("this command is ALSO useless")
    }
})