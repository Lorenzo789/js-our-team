// * nome repo: js-our-team
// *Consegna
// *Viene fornita una piccola tabella che rappresenta i membri di un team.
// *Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
// *Completate i milestone nell'ordine assegnato, non andate avanti finché non avete concluso con successo la milestone precedente.
// *Chiudete almeno una commit per milestone.

// *MILESTONE 0:
// *Creare l’array di oggetti con le informazioni fornite.

// *MILESTONE 1:
// *Stampare su console le informazioni di nome, ruolo e la stringa della foto

// *MILESTONE 2:
// *Stampare le stesse informazioni su DOM sottoforma di stringhe

// *BONUS 1:
// *Trasformare la stringa foto in una immagine effettiva

// *BONUS 2:
// *Organizzare i singoli membri in card/schede

// ?Consigli del giorno:
// ?Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
// ?E ricordiamoci che console.log() è nostro amico!
// ?Buon lavoro!

// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	    Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg

// * MILESTONE 0 * \\
const teamArray = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"

    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"

    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"

    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"

    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"

    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"

    },
];
// * MILESTONE 0 * \\


// * MILESTONE 1 * \\
for (let index = 0; index < teamArray.length; index++) {

    // * MILESTONE 2 * \\
    const newElement = createElement(teamArray[index]);
    appendParent(newElement);    
    // * MILESTONE 2 * \\

    console.log(teamArray[index]);
}
// * MILESTONE 1 * \\










// ! FUNCTION ! \\
function createElement(member) {
    const newElement = document.createElement('div');
    newElement.className = ('col-6');
    newElement.innerHTML = `<div class="mt-4">
        <pre class="fw-bold">${member.name}</pre>
        <pre class="fw-bold">${member.role}</pre>
        <img src="./img/${member.image}" alt="">
    </div>`
    return newElement;
}

function appendParent(element) {
    
    const parentElement = document.getElementById('parent-wrapper');

    parentElement.append(element);

    return parentElement;
}
// ! FUNCTION ! \\