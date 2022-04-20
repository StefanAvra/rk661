console.log("👋\nhttps://avra.dev");

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

// clock
// accuracy is ± 60 seconds - just like the real thing
const timeEl = document.querySelector("time");
setInterval(syncTimeToClock, 60 * 1000);

syncTimeToClock();

function syncTimeToClock() {
    const date = new Date();
    const options = {
        hour: "numeric",
        minute: "numeric",
        hour12: false,
    };
    timeEl.innerHTML = new Intl.DateTimeFormat("default", options).format(date);
    timeEl.dateTime = date;
}

//power button
document
    .querySelector(".power")
    .addEventListener("click", (event) => console.log(event.target));
