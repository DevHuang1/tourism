const headerBg = document.getElementById("headerBg");

const Singapore = document.getElementById("Singapore");
const Japan = document.getElementById("Japan");
const Myanmar = document.getElementById("Myanmar");
const Thailand = document.getElementById("Thailand");
const Switzerland = document.getElementById("Switzerland");
const China = document.getElementById("China");
const Cambodia = document.getElementById("Cambodia");
const Norway = document.getElementById("Norway");
const Vietnam = document.getElementById("Vietnam");
const All = document.getElementById("All");

function showCard() {
  const cardsDisplay = document.getElementById("cardsDisplay");
  const input = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();
  const cards = document.querySelectorAll(".destination-card");
  cardsDisplay.className = "cardsDisplayNew";
  cards.forEach((card) => {
    if (card.dataset.country === input) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
    if (input === "singapore") {
      const sg = document.querySelector(".Singapore");
      const cardImg = document.querySelector(".card-image");
      sg.style.height = "600px";
      cardImg.style.height = "400px";
    }
    if (input === "thailand") {
      const cardImg = document.querySelector(".thai-card");
      const thai = document.querySelector(".Thailand");
      thai.style.height = "600px";
      cardImg.style.height = "400px";
    }
    if (input === "japan") {
      const cardImg = document.querySelector(".jap-card");
      const jp = document.querySelector(".Japan");
      jp.style.height = "600px";
      cardImg.style.height = "400px";
    }
    if (input === "vietnam") {
      const cardImg = document.querySelector(".viet-card");
      const viet = document.querySelector(".Vietnam");
      viet.style.height = "600px";
      cardImg.style.height = "400px";
    }
  });
}

Singapore.onclick = () => {
  const cards = document.querySelectorAll(".destination-card");
  const sg = document.querySelector(".Singapore");
  cards.forEach((card) => {
    if (card.dataset.country !== "singapore") card.style.display = "none";
    sg.style.display = "block";
  });
  headerBg.style.backgroundImage = "url('singapore.avif')";

  const cardImg = document.querySelector(".card-image");
  sg.style.height = "600px";
  cardImg.style.height = "400px";
};

Thailand.onclick = () => {
  const cards = document.querySelectorAll(".destination-card");
  const thai = document.querySelector(".Thailand");
  cards.forEach((card) => {
    if (card.dataset.country !== "thailand") card.style.display = "none";
    thai.style.display = "block";
  });
  headerBg.style.backgroundImage = "url('images/thailand.jpg')";
  const cardImg = document.querySelector(".thai-card");

  thai.style.height = "600px";
  cardImg.style.height = "400px";
};

Japan.onclick = () => {
  const cards = document.querySelectorAll(".destination-card");
  const jp = document.querySelector(".Japan");
  cards.forEach((card) => {
    if (card.dataset.country !== "japan") card.style.display = "none";
    jp.style.display = "block";
  });
  headerBg.style.backgroundImage = "url('images/japan.jpg')";
  const cardImg = document.querySelector(".jap-card");

  jp.style.height = "600px";
  cardImg.style.height = "400px";
};

Vietnam.onclick = () => {
  const cards = document.querySelectorAll(".destination-card");
  const viet = document.querySelector(".Vietnam");
  cards.forEach((card) => {
    if (card.dataset.country !== "vietnam") card.style.display = "none";
    viet.style.display = "block";
  });
  headerBg.style.backgroundImage = "url('images/vietnam.jpg')";
  const cardImg = document.querySelector(".viet-card");

  viet.style.height = "600px";
  cardImg.style.height = "400px";
};

Myanmar.onclick = () => {
  const cards = document.querySelectorAll(".destination-card");
  const myan = document.querySelector(".Myanmar");
  cards.forEach((card) => {
    if (card.dataset.country !== "myanmar") card.style.display = "none";
    myan.style.display = "block";
  });
  headerBg.style.backgroundImage = "url('images/myanmar.jpg')";
  const cardImg = document.querySelector(".myan-card");
  myan.style.height = "600px";
  cardImg.style.height = "400px";
};

China.onclick = () => {
  const cards = document.querySelectorAll(".destination-card");
  const ch = document.querySelector(".China");
  cards.forEach((card) => {
    if (card.dataset.country !== "china") card.style.display = "none";
    ch.style.display = "block";
  });
  headerBg.style.backgroundImage = "url('images/china.jpg')";
  const cardImg = document.querySelector(".china-card");
  ch.style.height = "600px";
  cardImg.style.height = "400px";
};

Cambodia.onclick = () => {
  const cards = document.querySelectorAll(".destination-card");
  const cam = document.querySelector(".Cambodia");
  cards.forEach((card) => {
    if (card.dataset.country !== "cambodia") card.style.display = "none";
    cam.style.display = "block";
  });
  headerBg.style.backgroundImage = "url('images/cambodia.jpg')";
  const cardImg = document.querySelector(".cam-card");
  cam.style.height = "600px";
  cardImg.style.height = "400px";
};

Norway.onclick = () => {
  const cards = document.querySelectorAll(".destination-card");
  const nor = document.querySelector(".Norway");
  cards.forEach((card) => {
    if (card.dataset.country !== "norway") card.style.display = "none";
    nor.style.display = "block";
  });
  headerBg.style.backgroundImage = "url('images/norway.jpg')";
  const cardImg = document.querySelector(".nor-card");
  nor.style.height = "600px";
  cardImg.style.height = "400px";
};

Switzerland.onclick = () => {
  const cards = document.querySelectorAll(".destination-card");
  const swiz = document.querySelector(".Switzerland");
  cards.forEach((card) => {
    if (card.dataset.country !== "switzerland") card.style.display = "none";
    swiz.style.display = "block";
  });
  headerBg.style.backgroundImage = "url('images/switzerland.jpg')";
  const cardImg = document.querySelector(".swiz-card");
  swiz.style.height = "600px";
  cardImg.style.height = "400px";
};

All.onclick = () => {
  window.location.reload();
};
