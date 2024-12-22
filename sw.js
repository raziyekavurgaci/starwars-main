// json raw data
const data = {
  characters: [
    {
      id: 1,
      name: "Luke Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
      homeworld: "tatooine",
    },
    {
      id: 2,
      name: "C-3PO",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
      homeworld: "tatooine",
    },
    {
      id: 3,
      name: "R2-D2",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
      homeworld: "naboo",
    },
    {
      id: 4,
      name: "Darth Vader",
      pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
      homeworld: "tatooine",
    },
    {
      id: 5,
      name: "Leia Organa",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
      homeworld: "alderaan",
    },
    {
      id: 6,
      name: "Owen Lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 7,
      name: "Beru Whitesun lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 8,
      name: "R5-D4",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
      homeworld: "tatooine",
    },
    {
      id: 9,
      name: "Biggs Darklighter",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
      homeworld: "tatooine",
    },
    {
      id: 10,
      name: "Obi-Wan Kenobi",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
      homeworld: "stewjon",
    },
    {
      id: 11,
      name: "Anakin Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
      homeworld: "tatooine",
    },
    {
      id: 12,
      name: "Wilhuff Tarkin",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
      homeworld: "eriadu",
    },
    {
      id: 13,
      name: "Chewbacca",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
      homeworld: "kashyyyk",
    },
    {
      id: 14,
      name: "Han Solo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
      homeworld: "corellia",
    },
    {
      id: 15,
      name: "Greedo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
      homeworld: "Rodia",
    },
    {
      id: 16,
      name: "Jabba Desilijic Tiure",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
      homeworld: "tatooine",
    },
    {
      id: 19,
      name: "Jek Tono Porkins",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
      homeworld: "bestine",
    },
    {
      id: 20,
      name: "Yoda",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
    },
    {
      id: 21,
      name: "Palpatine",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
      homeworld: "naboo",
    },
  ],
};

// get characters from raw data
const characters = data.characters;

// get html element by id to append new elements
const containerDiv = document.getElementById("card-container");
const radioButtonsContainer = document.getElementById(
  "homeworld-radio-buttons"
);
const button = document.getElementById("button");

// create boolean variable to use toogle button
let isActive = false;

// render character function
const renderChars = (renderCharacters = characters) => {
  // create new div element for html
  const row = document.createElement("div");
  // add classlist for this element
  row.classList.add("row", "d-flex", "justify-content-center", "m-2");
  // append new this row to html
  containerDiv.append(row);

  // for loop to create every character card
  for (i = 0; i < characters.length; i++) {
    // create variables for card attributes
    let pic = renderCharacters[i].pic;
    let name = renderCharacters[i].name;
    let homeworld = (renderCharacters[i].homeworld ?? "other").toLowerCase();
    // use variables with $ and back tick
    let cardHTMLData = `
    <div class="row m-2">
            <div class="card" style="width: 18rem;">
                <img src="${pic}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${homeworld}</p>
                </div>
            </div>
        </div>
    `;
    // append new elements with innerHTML
    row.innerHTML += cardHTMLData;
  }
};
// remove Character cards
const removeChars = () => {
  const row = document.querySelector(".row");
  row.remove();
};

// Change visibility of cards with button
const changeCharVisibility = () => {
  if (!isActive) {
    renderChars();
    isActive = true;
    button.innerHTML = "Hide Characters";
    button.classList.replace("btn-primary", "btn-danger");
  } else {
    removeChars();
    isActive = false;
    button.innerHTML = "Show Characters";
    button.classList.replace("btn-danger", "btn-primary");
    console.log(isActive);
  }
};
// get unique values of array
const getUniqueHomeWorld = () => {
  const homeworldRaw = characters.map(
    // leave every values as it is and if it is undefined or null assign it to other
    (character) => character.homeworld ?? "other"
  );
  // turn every values of array to lower case
  const homeworldRawLowerCase = homeworldRaw.map((homeworld) =>
    homeworld.toLowerCase()
  );
  // remove duplicates in array and leave values as unique
  const uniqueHomeworldList = [...new Set(homeworldRawLowerCase)];
  console.log("homeworldRaw   ----->    " + homeworldRaw);
  console.log("homeworldRawLowerCase   ----->    " + homeworldRawLowerCase);
  console.log("uniqueHomeworldList   ----->    " + uniqueHomeworldList);

  //this function returns uniqueHomeworldList
  return uniqueHomeworldList;
};

// render filter function
const renderFilters = () => {
  homeworldList = getUniqueHomeWorld();
  // added "all" to homeworldList array
  homeworldList.push("all");

  // create input group
  for (i = 0; i < homeworldList.length; i++) {
    let homeworldInput = document.createElement("input");
    let homeworldInputLabel = document.createElement("label");
    homeworldInput.setAttribute("type", "radio");
    homeworldInput.name = "homeworldInput";
    homeworldInput.value = homeworldList[i];
    // add classlists to html elements
    homeworldInput.classList.add("form-check-input");
    homeworldInputLabel.classList.add("form-check-label");
    // add labels by order
    homeworldInputLabel = homeworldList[i];
    // htmlFor -> link label and input
    homeworldInputLabel.htmlFor = homeworldList[i];
    console.log("homeworldInput label  ---->   " + homeworldInputLabel);
    // to create html elements
    const div = document.createElement("div");
    containerDiv.append(div);
    containerDiv.append(homeworldInput);
    containerDiv.append(homeworldInputLabel);
    // make "all" value checked as default
    if (homeworldInput.value === "all") {
      homeworldInput.checked = true;
    }
  }
  // assign variable for radio buttons
  let radioButtons = document.getElementsByName("homeworldInput");
  let prev = null;
  // create variables to use in for loop to get input value
  let filteredHomeworld;
  let radioButtonValue;
  // to listen input value
  for (i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("change", function () {
      prev ? console.log("Previous value = " + prev.value) : null;
      if (this !== prev) {
        // if previous value is not same assign new previous value
        prev = this;
        // assign radiobutton value to input value
        radioButtonValue = this.value;
      }
      // check input value and pass its value to filteredHomeWorld to render correct cards
      if (radioButtonValue === "all") {
        filteredHomeworld = characters;
        console.log("1 " + "filteredHomeworld = " + filteredHomeworld);
      } else if (radioButtonValue === "other") {
        filteredHomeworld = characters.filter(
          (character) => character.homeworld === undefined
        );
        console.log("2 " + "filteredHomeworld = " + filteredHomeworld);
      } else {
        filteredHomeworld = characters.filter(
          (character) =>
            character.homeworld?.toLocaleLowerCase() === radioButtonValue
        );
        console.log("3 " + "filteredHomeworld = " + filteredHomeworld);
      }
      // first remove cards then render new ones
      removeChars();
      renderChars(filteredHomeworld);
    });
  }
};

renderFilters();
