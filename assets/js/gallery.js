/*delay på data hentning i ms for at simulere data hentning online*/
const myLoadTime = 2000;

// reset variables
let myData = null;
let myApp = null;

/* starts app when the DOM is loaded */
window.addEventListener("load", initApp);

// init app er den funktion der kickstarter din app når DOM er loaded.
function initApp() {
  fetchData(); // starter hentning af data.
  myApp = document.getElementById("app"); // vi finder det tag voress app skal leve i. kaldet app
  createLoadingScreen();
}

let createLoadingScreen = () => {
  let loadContainer = document.createElement("main");

  let loadTitle = document.createElement("h1");
  loadTitle.innerText = "Fetching data";

  let loadFig = document.createElement("figure");
  let loadImg = document.createElement("img");
  loadImg.src = "assets/img/memes-loading.gif";
  loadImg.alt = "Loading";

  myApp.appendChild(loadContainer);
  loadContainer.appendChild(loadTitle);
  loadContainer.appendChild(loadFig);
  loadFig.appendChild(loadImg);
};

let initGallery = (dataReceived) => {
  myData = dataReceived;
  resetGallery();
  buildGallery();
};

let resetGallery = () => {
  myApp.innerHTML = "";
};

let buildGallery = () => {
  myData.map((myAnimalData) => {
    buildCard(myAnimalData);
  });
};

let buildCard = (myAnimalData) => {
  let card = document.createElement("article");
  card.classList.add("galleryCard");
  card.addEventListener("click", () => {
    if (card.classList.contains("galleryCard")) {
      card.classList.remove("galleryCard");
      card.classList.add("detailView");
      cardDesc.innerText = myAnimalData.description;
    } else if (card.classList.contains("detailView")) {
      card.classList.remove("detailView");
      card.classList.add("galleryCard");
      cardDesc.innerText = myAnimalData.shortDescription;
    }
  });

  let cardHl = document.createElement("h2");
  cardHl.innerText = myAnimalData.name;

  let cardFig = document.createElement("figure");
  let cardImg = document.createElement("img");
  cardImg.src = myAnimalData.picture;
  cardImg.alt = "Wild animal";

  let cardDesc = document.createElement("p");
  cardDesc.innerText = myAnimalData.shortDescription;

  myApp.appendChild(card);
  card.appendChild(cardHl);
  card.appendChild(cardFig);
  cardFig.appendChild(cardImg);
  card.appendChild(cardDesc);
};

/*  get data function  DO NOT TOUCH!!!!! ......................................................

denne funktion vil typisk være en funktion der henter data fra et API
*/

async function fetchData() {
  // data object
  console.log("fetching data");
  await new Promise((resolve) => setTimeout(resolve, myLoadTime));

  const myData = [
    {
      name: "Elefant",
      picture: "assets/img/elephant.jpg",
      description:
        "Loxodonta africana, også kendt som afrikansk elefant, er verdens største landdyr. Den har en grå hud og store ører, som den bruger til at regulere kropstemperaturen og kommunikere med andre elefanter. Afrikanske elefanter lever i store flokke og spiser op til 150 kg planter om dagen. De er også kendt for deres stærke intelligens og følelsesmæssige bånd til deres familie og flok. På grund af ulovlig jagt og tab af levesteder er afrikanske elefanter klassificeret som truede og er beskyttet af lovgivning",
      shortDescription: "Loxodonta africana, også kendt som afrikansk elefant.",
    },

    {
      name: "Tiger",
      picture: "assets/img/standard_tiger.jpg",
      description:
        "Panthera tigris, også kendt som tigeren, er en stor kat, der er hjemmehørende i Asien. Tigeren har en gul eller orange pels med mørke striber og har normalt en lang kraftig hale. Der findes forskellige underarter af tigeren, og størrelsen og farven kan variere afhængigt af underarten og habitatet. Tigeren er kendt for sin styrke, hurtighed og smidighed, og den er en top-rovdyr i sit økosystem. Desværre er mange af underarterne af tigeren truede på grund af tab af levesteder og ulovlig jagt, og bevaring af tigeren og dens levesteder er en vigtig bevaringsindsats.",
      shortDescription: "Panthera tigris, også kendt som tigeren.",
    },

    {
      name: "Tarantel",
      picture: "assets/img/Brachypelma_smithi.jpg",
      description:
        "Brachypelma smithi, også kendt som den mexicansk rødknæs tarantel, er en stor og farverig edderkop, der er hjemmehørende i Mexico. Den har en mørk krop med røde og orange striber på benene og en karakteristisk rød knæled. Brachypelma smithi er en populær art blandt edderkoppeentusiaster på grund af dens smukke farver og rolige natur.",
      shortDescription:
        "Brachypelma smithi, også kendt som den mexicansk rødknæs tarantel.",
    },

    {
      name: "Koala",
      picture: "assets/img/_WW236934.jpg",
      description:
        "Phascolarctos cinereus, også kendt som koala, er en pungdyrart, der er hjemmehørende i Australien. Den har en blød, tyk pels, store ører og en stor næse, og dens krop er tilpasset til at leve hovedsageligt af eukalyptusblade. Koalaer lever hovedsageligt i trætoppene og er kendt for deres afslappede og søvnige opførsel, da de sover op til 20 timer om dagen.",
      shortDescription: "Phascolarctos cinereus, også kendt som koala.",
    },

    {
      name: "Haj",
      picture: "assets/img/great-white.jpg",
      description:
        "Carcharodon carcharias, også kendt som en hvidhaj eller great white haj, er en stor rovdyr, der lever i kystfarvande over hele verden. Den har en grå-blå krop med en trekantet finne på ryggen og en stor kraftig kæbe med skarpe tænder. Carcharodon carcharias er kendt for at være en top-rovdyr og jager primært sæler og fisk. Den er også kendt for dens sjældne, men berygtede, angreb på mennesker, selvom sådanne angreb ofte er utilsigtede og sjældne.",
      shortDescription: "Carcharodon carcharias, også kendt som en hvidhaj.",
    },
  ];
  initGallery(myData);
}
