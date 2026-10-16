console.log("foo")
const landKoder = [
    "GE", "AF", "AL", "DZ", "AD", "AO", "AG", "AR", "AM", "AZ", 
    "AT", "AU", "TL", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", 
    "BJ", "BT", "BO", "BA", "BW", "BR", "GB", "BN", "BG", "BF", 
    "BI", "CA", "CL", "CO"
];

const landNavn = [
    "Abkhazia", "Afghanistan", "Albania", "Algerie", "Andorra", "Angola", 
    "Antigua og Barbuda", "Argentina", "Armenia", "Aserbajdsjan", "Østerrike", 
    "Australia", "Øst-Timor", "Bahamas", "Bahrain", "Bangladesh", "Barbados", 
    "Belarus", "Belgia", "Belize", "Benin", "Bhutan", "Bolivia", 
    "Bosnia og Hercegovina", "Botswana", "Brasil", "Britania", "Brunei", 
    "Bulgaria", "Burkina Faso", "Burundi", "Canada", "Chile", "Colombia"
];


for (i = 0; i<landKoder.length; i++){
    let newDiv = document.createElement("div");
    let link = document.createElement("a")
    link.setAttribute("href", "land side.html")
    let bilde = document.createElement("img");
    let navn = document.createElement("p");
    navn.textContent = landNavn[i].split(".")[0];

    let flagUrl = 'https://flagsapi.com/' + landKoder[i] + '/flat/64.png';
    bilde.setAttribute("src", flagUrl);


    link.appendChild(bilde);

    newDiv.appendChild(link)
    newDiv.appendChild(navn);

    document.body.appendChild(newDiv);
    // setAttribute
    // appendChild

}