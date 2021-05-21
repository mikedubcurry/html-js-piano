function createWhiteKey(note) {
    const key = document.createElement("div");
    key.classList.add("white");
    key.classList.add(note);
    key.style.backgroundColor = "#FFFFF0";
    key.style.width = "36px";
    key.style.height = "124px";
    // key.innerText = note;
    return key;
}

function createBlackKey(note) {
    const key = document.createElement("div");
    key.classList.add("black");
    key.classList.add(note);
    key.style.backgroundColor = "#2F4F4F";
    key.style.height = "96px";
    key.style.width = "24px";
    // key.innerText = note;
    return key;
}

function createAudioTag(note) {
    const tag = document.createElement("audio");
    tag.src = `notes/${note}.mp3`;
    tag.classList.add(note);
    return tag;
}

const keyBoard = document.createElement("div");
keyBoard.classList.add("keyboard");

const whiteKeys = ["C", "D", "E", "F", "G", "A", "B"];
const blackKeys = ["Csharp", "Dsharp", "_", "Fsharp", "Gsharp", "Asharp"];
const whiteContainer = document.createElement("div");
const blackContainer = document.createElement("div");
whiteContainer.classList.add("whitekeys");
blackContainer.classList.add("blackkeys");

whiteKeys.forEach((note) => {
    whiteContainer.appendChild(createWhiteKey(note));
});

blackKeys.forEach((note) => {
    blackContainer.appendChild(createBlackKey(note));
});

keyBoard.appendChild(whiteContainer);
keyBoard.appendChild(blackContainer);
const app = document.querySelector("#app");

const notes = document.createElement("div");
notes.style.visibility = "hidden";
[...whiteKeys, ...blackKeys].forEach((note) => {
    notes.appendChild(createAudioTag(note));
});

app.appendChild(keyBoard);
app.appendChild(notes);

function playNote(note) {
    let audio = document.querySelector(`audio.${note}`);
    audio.currentTime = 0;
    audio.play();
}

function highlightKey(note) {
    let key = document.querySelector(`div.${note}`);
    key.classList.add("pressed");
}

function unHighlightKey(note)
 {
    let key = document.querySelector(`div.${note}`);
    key.classList.remove("pressed");
 }
function handleKeyUp(e) {
    switch (e.key) {
        case "z":
            unHighlightKey("C");
            break;
        case "s":
            unHighlightKey("Csharp");
            break;
        case "x":
            unHighlightKey("D");
            break;
        case "d":
            unHighlightKey("Dsharp");
            break;
        case "c":
            unHighlightKey("E");
            break;
        case "v":
            unHighlightKey("F");
            break;
        case "g":
            unHighlightKey("Fsharp");
            break;
        case "b":
            unHighlightKey("G");
            break;
        case "h":
            unHighlightKey("Gsharp");
            break;
        case "n":
            unHighlightKey("A");
            break;
        case "j":
            unHighlightKey("Asharp");
            break;
        case "m":
            unHighlightKey("B");
            break;
    }
}

function handleKeyPress(e) {
    if (!e.repeat)
        switch (e.key) {
            case "z":
                playNote("C");
                highlightKey("C");
                break;
            case "s":
                playNote("Csharp");
                highlightKey("Csharp");
                break;
            case "x":
                playNote("D");
                highlightKey("D");
                break;
            case "d":
                playNote("Dsharp");
                highlightKey("Dsharp");
                break;
            case "c":
                playNote("E");
                highlightKey("E");
                break;
            case "v":
                playNote("F");
                highlightKey("F");
                break;
            case "g":
                playNote("Fsharp");
                highlightKey("Fsharp");
                break;
            case "b":
                playNote("G");
                highlightKey("G");
                break;
            case "h":
                playNote("Gsharp");
                highlightKey("Gsharp");
                break;
            case "n":
                playNote("A");
                highlightKey("A");
                break;
            case "j":
                playNote("Asharp");
                highlightKey("Asharp");
                break;
            case "m":
                playNote("B");
                highlightKey("B");
                break;
        }
}

[...whiteKeys, ...blackKeys].forEach((note) => {
    document
        .querySelector(`div.${note}`)
        .addEventListener("click", () => playNote(note));
});

document.body.addEventListener("keydown", handleKeyPress);
document.body.addEventListener("keyup", handleKeyUp);
