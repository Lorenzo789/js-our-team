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
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"

    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"

    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"

    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"

    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"

    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"

    },
];
// * MILESTONE 0 * \\


// * MILESTONE 1 * \\
for (let index = 0; index < teamArray.length; index++) {

    console.log(`
        ${teamArray[index].nome}  
        ${teamArray[index].ruolo}  
        ${teamArray[index].foto}
    `);

    const newElement = createElement(teamArray[index]);
    const parentWrapper = appendParent(newElement);    
    console.log(newElement);
}
// * MILESTONE 1 * \\

// * MILESTONE 2 * \\










// ! FUNCTION ! \\
function createElement(member) {
    const newElement = document.createElement('div');
    newElement.innerHtml = `<div>
        <pre></pre>
        <pre></pre>
        <pre></pre>
    </div>`
    return newElement;
}

function appendParent(element) {
    
    const parentElement = document.getElementById('parent-wrapper');

    parentElement.append(element);

    return parentElement;
}