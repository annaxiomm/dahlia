import { registerCommand } from "../../core/command.ts";

registerCommand({
    id: "command.test",
    label: "Test Command",
    run: () => {
        console.log("Running the test command... ( nothing is happening :/ )");
    }
})