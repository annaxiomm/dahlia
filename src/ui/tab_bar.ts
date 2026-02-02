import { currentBuffer, listBuffers } from "../editor/editor";

const tabBar = document.getElementById("tabs");

export function reloadTabs() {
    const openBuffers = listBuffers();
    openBuffers.forEach((value) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        if (value == currentBuffer) {
            button.classList.add("active");
            console.log('camisole');
        }
        button.innerText = value;
        li.appendChild(button);
        tabBar?.appendChild(li);
    })
}