let characterCardsVisible = false;

function removeAllCards() {
  // YENİ- Cardları silmeyi farklı bir fonksiyona taşıdık filtrelemede kullanmak için
  const cardList = document.getElementById("card-list");
  cardList.innerHTML = "";
}

// Karakter kartlarını göster veya gizle fonksiyonu
function toggleCharacterCards() {
  const toggleButton = document.getElementById("buttonCard");

  if (characterCardsVisible) {
    // Eğer kartlar zaten görünüyorsa, gizle
    removeAllCards(); // YENİ- Silme işlemini için fonksiyonu burada tetikledi
    toggleButton.textContent = "Karakterleri Göster";
    characterCardsVisible = false;
  } else {
    // Eğer kartlar görünmüyorsa, göster
    toggleButton.textContent = "Karakterleri Gizle";
    characterCardsVisible = true;
  }
}
// Butona tıklandığında toggleCharacterCards fonksiyonunu çağır

function radioButtonFunction(value1) {
  // YENİ- Bu fonksiyon daha önce show-card içinde olduğu için bulunamıyordu dışarı çıkarttık
  createCards(value1);
}

function createCards(filteredValue) {
  // YENİ- Dışarı çıkarttığımız fonksiyon bunu radiobutton basıldığında tetiklediğimiz için dışarı çıkarttık
  const cardList = document.getElementById("card-list");
  const allCharacters = [
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
      id: 18,
      name: "Wedge Antilles",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
      homeworld: "corellia",
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
  ];
  //burada filtreleme çalışıyor.
  if (typeof filteredValue === "string") {
    characters = allCharacters.filter(function (character) {
      return character.homeworld === filteredValue;
    });
    removeAllCards(); // YENİ- Tüm kartları siliyoruz
  } else {
    characters = allCharacters;
    toggleCharacterCards();
  }

  if (characterCardsVisible === false) return;

  console.log(characters);
  const homeworldsRaw = [];
  // for döngüsü ile array'in içinden homeworld değerlerini alıyoruz
  for (let i = 0; i < characters.length; i++) {
    if (
      characters[i].homeworld !== undefined &&
      characters[i].homeworld !== null
    ) {
      homeworldsRaw.push(characters[i].homeworld);
    } else {
      homeworldsRaw.push("other");
    }
  }
  let characterHomeworldVisible = false;
  // removeDuplicates döngüsü ile array'in içinden tekrarlayan homeworld değerlerini atıyoruz
  function removeDuplicates(homeworldsRaw) {
    return [...new Set(homeworldsRaw)];
  }
  console.log(removeDuplicates(homeworldsRaw));

  // homeworldsRaw döngüsünü homeworldsLowercase olarak tanımladık
  const homeworldsLowercase = removeDuplicates(homeworldsRaw);
  //
  const homeworlds = homeworldsLowercase;
  console.log(homeworlds);

  homeworlds.forEach((homeworld) => {
    const radio = document.createElement("div");
    radio.className = "form-check";
    radio.innerHTML = `
    <input
      class="form-check-input"
      type="radio"
      name="homeworld"
      id="homeworld-${homeworld}"
      value="${homeworld}"
      onclick = 'radioButtonFunction("${homeworld}")'
    />
    <label class="form-check-label" for="homeworld-${homeworld}">
      ${homeworld}
    </label>
  `;
    radioB.appendChild(radio);
  });
  characters.forEach((character) => {
    const card = document.createElement("div");
    card.className = `card`;

    card.innerHTML = `
    <h4 class="mt-4">${character.name}</h4>
    <img src="${character.pic}" alt="${character.name}" class="mt-2"> 
    <p class="mt-3">${character.homeworld}</p>`;

    cardList.appendChild(card);
  });
}

document.getElementById("show-card").addEventListener("click", createCards); // YENİ- Buradaki gömülü fonksiyonu dışarı çıkarttık filtreleme yapabilmek için
//---------------------------------------------------------------------------------------------
// // homeworld değerlerine göre filtreleme işlemini gerçekleştiren fonksiyon
// function homeworldFilter(characters) {
//   const homeworldCounts = {}; // homeworld değerlerini ve tekrar sayılarını saklamak için bir obje oluşturuyoruz

//   // characters array'ini dolaşarak homeworld değerlerinin tekrar sayılarını hesaplıyoruz
//   characters.forEach((character) => {
//     const homeworld = character.homeworld;
//     homeworldCounts[homeworld] = (homeworldCounts[homeworld] || 0) + 1;
//   });

//   // Tekrar sayısı 1'den büyük olan homeworld değerlerini filtreliyoruz
//   const filteredHomeworlds = Object.keys(homeworldCounts).filter(
//     (homeworld) => homeworldCounts[homeworld] > 1
//   );

//   return filteredHomeworlds;
// }

// // Homeworld değerleri filtrelenmiş olan karakterleri göster
// const filteredHomeworlds = homeworldFilter(characters);
//---------------------------------------------------------------------------------------------
// Her karakter için bir div ve card oluşturduk
