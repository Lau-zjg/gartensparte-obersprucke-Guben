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

function openGardenModal(
  titel,
  bild,
  status,
  groesse,
  laube,
  wasser,
  strom,
  frei
) {

  document.getElementById("modalTitle").innerText = titel;
  document.getElementById("modalImage").src = bild;
  document.getElementById("modalStatus").innerText = status;
  document.getElementById("modalSize").innerText = groesse;
  document.getElementById("modalLaube").innerText = laube;
  document.getElementById("modalWasser").innerText = wasser;
  document.getElementById("modalStrom").innerText = strom;
  document.getElementById("modalFrei").innerText = frei;

  document.getElementById("gardenModal").style.display = "block";
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