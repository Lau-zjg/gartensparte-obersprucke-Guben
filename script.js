let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showNextSlide() {

  if (slides.length > 0) {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
  }
}

setInterval(showNextSlide, 7000);

let currentGardenImages = [];
let currentGardenImageIndex = 0;

function openGardenModal(
  titel,
  bilder,
  status,
  groesse,
  laube,
  wasser,
  strom,
  frei
) {

  // Falls nur ein Bild angegeben wurde
  if (!Array.isArray(bilder)) {
    bilder = [bilder];
  }

  currentGardenImages = bilder;
  currentGardenImageIndex = 0;

  document.getElementById("modalTitle").innerText = titel;
  document.getElementById("modalStatus").innerText = status;
  document.getElementById("modalSize").innerText = groesse;
  document.getElementById("modalLaube").innerText = laube;
  document.getElementById("modalWasser").innerText = wasser;
  document.getElementById("modalStrom").innerText = strom;
  document.getElementById("modalFrei").innerText = frei;

  updateGardenImage();

  document.getElementById("gardenModal").style.display = "block";
}

function updateGardenImage() {

  document.getElementById("modalImage").src =
    currentGardenImages[currentGardenImageIndex];

  const counter = document.getElementById("modalCounter");
  const prevButton = document.getElementById("gardenPrev");
  const nextButton = document.getElementById("gardenNext");

  // Bildnummer anzeigen
  counter.innerText =
    (currentGardenImageIndex + 1) +
    " / " +
    currentGardenImages.length;

  // Pfeile nur anzeigen, wenn es mehrere Bilder gibt
  if (currentGardenImages.length > 1) {
    prevButton.style.display = "block";
    nextButton.style.display = "block";
    counter.style.display = "block";
  } else {
    prevButton.style.display = "none";
    nextButton.style.display = "none";
    counter.style.display = "none";
  }
}

function changeGardenImage(direction) {

  currentGardenImageIndex += direction;

  // Vom letzten Bild wieder zum ersten
  if (currentGardenImageIndex >= currentGardenImages.length) {
    currentGardenImageIndex = 0;
  }

  // Vom ersten Bild wieder zum letzten
  if (currentGardenImageIndex < 0) {
    currentGardenImageIndex = currentGardenImages.length - 1;
  }

  updateGardenImage();
}

function closeGardenModal() {
  document.getElementById("gardenModal").style.display = "none";
}

function closeGardenModal() {
  document.getElementById("gardenModal").style.display = "none";
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeGardenModal();
  }
});

window.addEventListener("click", function(event) {
  const modal = document.getElementById("gardenModal");

  if (event.target === modal) {
    closeGardenModal();
  }
});

function openPlantModal() {
  document.getElementById("plantModal").style.display = "block";
}

function closePlantModal() {
  document.getElementById("plantModal").style.display = "none";
}

function openPlantModal() {
  document.getElementById("plantModal").style.display = "flex";
}

function closePlantModal() {
  document.getElementById("plantModal").style.display = "none";
}

function openHintModal(title, items) {
  document.getElementById("hintTitle").innerText = title;

  const list = document.getElementById("hintList");
  list.innerHTML = "";

  items.forEach(function(item) {
    const li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });

  document.getElementById("hintModal").style.display = "block";
}

function closeHintModal() {
  document.getElementById("hintModal").style.display = "none";
}

function openNoticeModal(title, icon, text, date, signature) {
  document.getElementById("noticeTitle").innerText = icon + " " + title;
  document.getElementById("noticeText").innerText = text;
  document.getElementById("noticeDate").innerText = date;
  document.getElementById("noticeSignature").innerText = signature;

  document.getElementById("noticeModal").style.display = "block";
}

function closeNoticeModal() {
  document.getElementById("noticeModal").style.display = "none";
}
