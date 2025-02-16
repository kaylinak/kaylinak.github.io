function updateTextArea() {
    alert("Hello, world!"); // alert message

    let text = document.getElementById("textArea");
    let fancy = document.getElementById("fancy");
    let boring = document.getElementById("boring");

    // change textarea based on radio buttons
    if (fancy.checked) { // increase the size, bold, blue, underlined
        text.style.fontSize = "24pt"; 
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";

    } else if (boring.checked) { // undo any changes or keep as same
        text.style.fontSize = ""; 
        text.style.fontWeight = "normal";
        text.style.color = "";
        text.style.textDecoration = "";
    }
}

function fancyAlert() {
    alert("You clicked on FancyShmancy!"); // alert that FancyShmancy is selected
}

function addMoo() {
    let text = document.getElementById('textArea').value;
    // uppercase text
    text = text.toUpperCase();

    // split text into sentences by periods
    let sentences = text.split(".");

    // appending "-Moo" at the end of each sentence
    for (let i = 0; i < sentences.length; i++) {
        if (sentences[i] != "") { // check to make sure sentence isn't empty thus no additional moos
            let words = sentences[i].split(" "); // split sentence into words

            words[words.length - 1] = words[words.length - 1] + "-Moo"; // append "-Moo" to the last word of words
            sentences[i] = words.join(" "); // put words back together into a sentence
        }
    }

    // put sentences back together & put a period between each
    document.getElementById('textArea').value = sentences.join("."); 
}