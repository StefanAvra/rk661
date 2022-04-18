console.log("👋\nhttps://github.com/stefanavra");

const root = document.querySelector(":root");

document.querySelector("#toggle-color").addEventListener("click", (event) => {
    console.log(event.target.checked);
    root.style.setProperty(
        "--label-color",
        getComputedStyle(root).getPropertyValue("--label-color") === "black"
            ? "goldenrod"
            : "black"
    );
});
