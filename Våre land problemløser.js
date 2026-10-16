console.log("foo")
const landKoder = [
    "GE", "AF", "AL", "DZ", "AD", "AO", "AG", "AR", "AM", "AZ", 
    "AT", "AU", "TL", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", 
    "BJ", "BT", "BO", "BA", "BW", "BR", "GB", "BN", "BG", "BF", 
    "BI", "CA", "CL", "CO"
];


for (i = 0; i<landKoder.length; i++){
    let newDiv = document.createElement("div");
    let link = document.createElement("a")
    link.setAttribute("href", "land side.html")
    let bilde = document.createElement("img");
    let navn = document.createElement("p");
    navn.textContent = landKoder[i].split(".")[0];

    let flagUrl = 'https://flagsapi.com/' + landKoder[i] + '/flat/64.png';
    bilde.setAttribute("src", flagUrl);


    link.appendChild(bilde);

    newDiv.appendChild(link)
    newDiv.appendChild(navn);

    document.body.appendChild(newDiv);
    // setAttribute
    // appendChild

}