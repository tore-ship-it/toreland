console.log("foo")
let bilder = ["Britania.png"]

for (i = 0; i<bilder.length; i++){
    let newDiv = document.createElement("div");
    let link = document.createElement("a")
    link.setAttribute("href", "land side.html")
    let bilde = document.createElement("img");
    bilde.setAttribute("src", "/Bilder/" + bilder[i]);
    let navn = document.createElement("p");
    navn.textContent = bilder[i].split(".")[0];

    link.appendChild(bilde);

    newDiv.appendChild(link)
    newDiv.appendChild(navn);

    document.body.appendChild(newDiv);
    // setAttribute
    // appendChild

}