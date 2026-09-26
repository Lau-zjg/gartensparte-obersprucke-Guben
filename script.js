/* =========================================================
   STARTSEITE – SLIDER
   ========================================================= */

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


/* =========================================================
   FREIE GÄRTEN – BILDERGALERIE
   ========================================================= */

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

  // Falls nur ein Bild angegeben wurde,
  // wird daraus automatisch ein Array
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

  const counter =
    document.getElementById("modalCounter");

  const prevButton =
    document.getElementById("gardenPrev");

  const nextButton =
    document.getElementById("gardenNext");


  // Bildnummer anzeigen

  counter.innerText =
    (currentGardenImageIndex + 1) +
    " / " +
    currentGardenImages.length;


  // Pfeile nur bei mehreren Bildern anzeigen

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

  if (
    currentGardenImageIndex >=
    currentGardenImages.length
  ) {

    currentGardenImageIndex = 0;

  }


  // Vom ersten Bild wieder zum letzten

  if (currentGardenImageIndex < 0) {

    currentGardenImageIndex =
      currentGardenImages.length - 1;

  }


  updateGardenImage();
}


function closeGardenModal() {

  document.getElementById("gardenModal").style.display = "none";

}


/* =========================================================
   GARTEN-MODAL – ESC & KLICK AUF HINTERGRUND
   ========================================================= */

document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {

    closeGardenModal();

    closePlantModal();

  }

});


window.addEventListener("click", function(event) {

  const gardenModal =
    document.getElementById("gardenModal");

  const plantModal =
    document.getElementById("plantModal");


  if (event.target === gardenModal) {

    closeGardenModal();

  }


  if (event.target === plantModal) {

    closePlantModal();

  }

});


/* =========================================================
   WISSENSWERTES – PFLANZENDATEN
   ========================================================= */

const plantData = {

  /* =========================
     APFELBAUM
     ========================= */

  "Apfelbaum": {

    bilder: [
      "apfelbaum.jpg",
      "apfelblüte.jpg",
      "apfel.jpg"
    ],

    latein: "Malus domestica",

    kategorie: "Obst",

    jahreszeit: "Frühling – Herbst",

    standort:
      "Sonnig bis halbschattig",

    pflanzzeit:
      "Herbst oder Frühjahr",

    pflege:
      "Regelmäßig schneiden und bei Trockenheit gießen",

    ernte:
      "August bis Oktober",

    verwendung:
      "Apfelmus, Kuchen, Saft oder Kompott"

  },


  /* =========================
     KÜRBIS
     ========================= */

  "Kürbis": {

    bilder: [
      "kürbis.jpg",
      "kürbispflanze.jpg",
      "Kürbisblüte.jpg"
    ],

    latein: "Cucurbita",

    kategorie: "Gemüse",

    jahreszeit:
      "Frühjahr – Herbst",

    standort:
      "Sonnig, warm und windgeschützt; nährstoffreicher, humoser Boden",

    pflanzzeit:
      "Ab Mitte Mai nach den letzten Frösten",

    pflege:
      "Regelmäßig und ausreichend gießen, Boden mulchen, viel Platz einplanen und bei Bedarf düngen",

    ernte:
      "August bis Oktober",

    verwendung:
      "Suppen, Ofengerichte, Püree, Kuchen und andere Backwaren"

  },


  /* =========================
     ERDBEEREN
     ========================= */

  "Erdbeeren": {

    bilder: [
      "erdbeeren.jpg",
      "erdbeerpflanze.jpg",
      "erdbeerbluete.jpg"
    ],

    latein:
      "Fragaria × ananassa",

    kategorie: "Obst",

    jahreszeit:
      "Frühling – Sommer",

    standort:
      "Sonnig bis halbschattig; humoser, nährstoffreicher und gut durchlässiger Boden",

    pflanzzeit:
      "Frühjahr oder Spätsommer",

    pflege:
      "Regelmäßig gießen, Unkraut entfernen und bei Bedarf mulchen",

    ernte:
      "Mai bis Juli",

    verwendung:
      "Frisch, Kuchen, Marmelade, Desserts oder Milchshakes"

  },


  /* =========================
     KARTOFFELN
     ========================= */

  "Kartoffeln": {

    bilder: [
      "kartoffeln.jpg",
      "kartoffelpflanze.jpg",
      "kartoffelbluete.jpg"
    ],

    latein:
      "Solanum tuberosum",

    kategorie: "Gemüse",

    jahreszeit:
      "Frühling – Herbst",

    standort:
      "Sonnig; lockerer, humoser und nährstoffreicher Boden",

    pflanzzeit:
      "März bis Mai, je nach Wetter und Region",

    pflege:
      "Regelmäßig gießen, Unkraut entfernen und die Pflanzen mehrmals anhäufeln",

    ernte:
      "Juni bis Oktober",

    verwendung:
      "Salzkartoffeln, Kartoffelsalat, Püree, Pommes, Ofenkartoffeln und viele weitere Gerichte"

  },


  /* =========================
     TOMATEN
     ========================= */

  "Tomaten": {

    bilder: [
      "tomaten.jpg",
      "tomatenpflanze.jpg",
      "tomatenbluete.jpg"
    ],

    latein:
      "Solanum lycopersicum",

    kategorie: "Gemüse",

    jahreszeit:
      "Frühling – Herbst",

    standort:
      "Sonnig, warm und möglichst windgeschützt; nährstoffreicher Boden",

    pflanzzeit:
      "Ab Mitte Mai nach den letzten Frösten",

    pflege:
      "Regelmäßig gießen, je nach Sorte ausgeizen und Pflanzen anbinden",

    ernte:
      "Juli bis Oktober",

    verwendung:
      "Salate, Soßen, Suppen, Pizza, Tomatensauce oder frisch"

  },


  /* =========================
     MÖHREN
     ========================= */

  "Möhren": {

    bilder: [
      "moehren.jpg",
      "moehrenpflanze.jpg",
      "moehrenbluete.jpg"
    ],

    latein:
      "Daucus carota subsp. sativus",

    kategorie: "Gemüse",

    jahreszeit:
      "Frühling – Herbst",

    standort:
      "Sonnig bis halbschattig; lockerer, steinfreier und humoser Boden",

    pflanzzeit:
      "März bis Juli",

    pflege:
      "Gleichmäßig gießen, Unkraut entfernen und den Boden locker halten",

    ernte:
      "Juni bis Oktober",

    verwendung:
      "Salate, Suppen, Eintöpfe, Beilagen oder frisch"

  },


  /* =========================
     PAPRIKA
     ========================= */

  "Paprika": {

    bilder: [
      "paprika.jpg",
      "paprikapflanze.jpg",
      "paprikabluete.jpg"
    ],

    latein:
      "Capsicum annuum",

    kategorie: "Gemüse",

    jahreszeit:
      "Frühling – Herbst",

    standort:
      "Sonnig, warm und windgeschützt; nährstoffreicher Boden",

    pflanzzeit:
      "Ab Mitte Mai nach den letzten Frösten",

    pflege:
      "Regelmäßig gießen und bei Bedarf düngen; Pflanzen bei Bedarf abstützen",

    ernte:
      "Juli bis Oktober",

    verwendung:
      "Salate, gefüllt, gebraten, gegrillt, Suppen oder Soßen"

  },


  /* =========================
     ZWIEBELN
     ========================= */

  "Zwiebeln": {

    bilder: [
      "zwiebeln.jpg",
      "zwiebelpflanze.jpg",
      "zwiebelbluete.jpg"
    ],

    latein:
      "Allium cepa",

    kategorie: "Gemüse",

    jahreszeit:
      "Frühling – Herbst",

    standort:
      "Sonnig; lockerer, humoser und gut durchlässiger Boden",

    pflanzzeit:
      "März bis April; Steckzwiebeln auch im Herbst möglich",

    pflege:
      "Mäßig gießen, Unkraut entfernen und Staunässe vermeiden",

    ernte:
      "Juli bis September",

    verwendung:
      "Suppen, Soßen, Salate, Gemüsegerichte oder als Gewürz"

  },


  /* =========================
     BROKKOLI
     ========================= */

  "Brokkoli": {

    bilder: [
      "brokkoli.jpg",
      "brokkolipflanze.jpg",
      "brokkolibluete.jpg"
    ],

    latein:
      "Brassica oleracea var. italica",

    kategorie: "Gemüse",

    jahreszeit:
      "Frühling – Herbst",

    standort:
      "Sonnig bis halbschattig; nährstoffreicher, humoser Boden",

    pflanzzeit:
      "Frühjahr bis Sommer, je nach Sorte",

    pflege:
      "Regelmäßig und ausreichend gießen und bei Bedarf düngen",

    ernte:
      "Juni bis Oktober",

    verwendung:
      "Gedünstet, gekocht, gebraten, als Beilage, Suppe oder Auflauf"

  },


  /* =========================
     ZUCCHINI
     ========================= */

  "Zucchini": {

    bilder: [
      "zucchini.jpg",
      "zucchinipflanze.jpg",
      "zucchinibluete.jpg"
    ],

    latein:
      "Cucurbita pepo",

    kategorie: "Gemüse",

    jahreszeit:
      "Frühling – Herbst",

    standort:
      "Sonnig und warm; nährstoffreicher, humoser Boden",

    pflanzzeit:
      "Ab Mitte Mai nach den letzten Frösten",

    pflege:
      "Regelmäßig und ausreichend gießen, bei Bedarf düngen und ausreichend Platz einplanen",

    ernte:
      "Juni bis Oktober",

    verwendung:
      "Gebraten, gegrillt, gefüllt, als Suppe, Auflauf oder Zucchininudeln"

  },


  /* =========================
     HEIDELBEEREN
     ========================= */

  "Heidelbeeren": {

    bilder: [
      "heidelbeeren.jpg",
      "heidelbeerstrauch.jpg",
      "heidelbeerbluete.jpg"
    ],

    latein:
      "Vaccinium corymbosum",

    kategorie: "Obst",

    jahreszeit:
      "Frühling – Sommer",

    standort:
      "Sonnig bis halbschattig; saurer, humoser und gut durchlässiger Boden",

    pflanzzeit:
      "Herbst oder Frühjahr",

    pflege:
      "Regelmäßig gießen, möglichst kalkarmes Wasser verwenden und den Boden mulchen",

    ernte:
      "Juni bis September",

    verwendung:
      "Frisch, Kuchen, Marmelade, Desserts oder Müsli"

  },


  /* =========================
     JOHANNISBEEREN
     ========================= */

  "Johannisbeeren": {

    bilder: [
      "johannisbeeren.jpg",
      "johannisbeerstrauch.jpg",
      "johannisbeerbluete.jpg"
    ],

    latein:
      "Ribes",

    kategorie: "Obst",

    jahreszeit:
      "Frühling – Sommer",

    standort:
      "Sonnig bis halbschattig; humoser und nährstoffreicher Boden",

    pflanzzeit:
      "Herbst oder Frühjahr",

    pflege:
      "Regelmäßig gießen und ältere Triebe regelmäßig zurückschneiden",

    ernte:
      "Juni bis August",

    verwendung:
      "Frisch, Kuchen, Gelee, Marmelade, Saft oder Desserts"

  },


  /* =========================
     HIMBEEREN
     ========================= */

  "Himbeeren": {

    bilder: [
      "himbeeren.jpg",
      "himbeerstrauch.jpg",
      "himbeerbluete.jpg"
    ],

    latein:
      "Rubus idaeus",

    kategorie: "Obst",

    jahreszeit:
      "Frühling – Herbst",

    standort:
      "Sonnig bis halbschattig; humoser, nährstoffreicher und gut durchlässiger Boden",

    pflanzzeit:
      "Herbst oder Frühjahr",

    pflege:
      "Regelmäßig gießen, Triebe an einer Rankhilfe befestigen und nach der Ernte zurückschneiden",

    ernte:
      "Juni bis Oktober, abhängig von der Sorte",

    verwendung:
      "Frisch, Kuchen, Marmelade, Desserts, Saft oder Smoothies"

  },


  /* =========================
     BIRNBAUM
     ========================= */

  "Birnbaum": {

    bilder: [
      "birnbaum.jpg",
      "birnbluete.jpg",
      "birnen.jpg"
    ],

    latein:
      "Pyrus communis",

    kategorie: "Obst",

    jahreszeit:
      "Frühling – Herbst",

    standort:
      "Sonnig bis halbschattig; nährstoffreicher und gut durchlässiger Boden",

    pflanzzeit:
      "Herbst oder Frühjahr",

    pflege:
      "Regelmäßig gießen und den Baum regelmäßig schneiden",

    ernte:
      "August bis Oktober",

    verwendung:
      "Frisch, Kompott, Kuchen, Saft oder Marmelade"

  },


  /* =========================
     KIRSCHBAUM
     ========================= */

  "Kirschbaum": {

    bilder: [
      "kirschbaum.jpg",
      "kirschbluete.jpg",
      "kirschen.jpg"
    ],

    latein:
      "Prunus avium",

    kategorie: "Obst",

    jahreszeit:
      "Frühling – Sommer",

    standort:
      "Sonnig und möglichst windgeschützt; nährstoffreicher Boden",

    pflanzzeit:
      "Herbst oder Frühjahr",

    pflege:
      "Bei Trockenheit gießen und den Baum regelmäßig pflegen und schneiden",

    ernte:
      "Juni bis Juli",

    verwendung:
      "Frisch, Kuchen, Kompott, Marmelade oder Saft"

  },


  /* =========================
     WEINREBE
     ========================= */

  "Weinrebe": {

    bilder: [
      "weinrebe.jpg",
      "weinblaetter.jpg",
      "weintrauben.jpg"
    ],

    latein:
      "Vitis vinifera",

    kategorie: "Obst",

    jahreszeit:
      "Frühling – Herbst",

    standort:
      "Sonnig, warm und windgeschützt; gut durchlässiger Boden",

    pflanzzeit:
      "Frühjahr oder Herbst",

    pflege:
      "Regelmäßig gießen, an einer Rankhilfe befestigen und regelmäßig zurückschneiden",

    ernte:
      "August bis Oktober",

    verwendung:
      "Frisch, Saft, Gelee oder zur Herstellung von Wein"

  }

};


/* =========================================================
   WISSENSWERTES – PFLANZEN-MODAL ÖFFNEN
   ========================================================= */

function openPlantModal(plantName) {

  const plant = plantData[plantName];


  // Sicherheitsprüfung

  if (!plant) {

    console.error(
      "Pflanze nicht gefunden:",
      plantName
    );

    return;

  }


  /* =========================
     TEXT EINSETZEN
     ========================= */

  document.getElementById("plantTitle").innerText =
    plantName;

  document.getElementById("plantLatin").innerText =
    plant.latein;

  document.getElementById("plantKategorie").innerText =
    plant.kategorie;

  document.getElementById("plantJahreszeit").innerText =
    plant.jahreszeit;

  document.getElementById("plantStandort").innerText =
    plant.standort;

  document.getElementById("plantPflanzzeit").innerText =
    plant.pflanzzeit;

  document.getElementById("plantPflege").innerText =
    plant.pflege;

  document.getElementById("plantErnte").innerText =
    plant.ernte;

  document.getElementById("plantVerwendung").innerText =
    plant.verwendung;


  /* =========================
     HAUPTBILD
     ========================= */

  const mainImage =
    document.getElementById("plantMainImage");

  mainImage.src =
    plant.bilder[0];

  mainImage.alt =
    plantName;


  /* =========================
     VORSCHAUBILDER
     ========================= */

  const thumbs =
    document.getElementById("plantThumbs");

  thumbs.innerHTML = "";


  plant.bilder.forEach(function(bild) {

    const img =
      document.createElement("img");

    img.src = bild;

    img.alt = plantName;


    img.onclick = function() {

      mainImage.src = bild;

    };


    thumbs.appendChild(img);

  });


  /* =========================
     MODAL ÖFFNEN
     ========================= */

  document.getElementById("plantModal").style.display =
    "flex";

}


/* =========================================================
   WISSENSWERTES – PFLANZEN-MODAL SCHLIESSEN
   ========================================================= */

function closePlantModal() {

  document.getElementById("plantModal").style.display =
    "none";

}


/* =========================================================
   HINWEISE
   ========================================================= */

function openHintModal(title, items) {

  document.getElementById("hintTitle").innerText =
    title;


  const list =
    document.getElementById("hintList");

  list.innerHTML = "";


  items.forEach(function(item) {

    const li =
      document.createElement("li");

    li.innerText = item;

    list.appendChild(li);

  });


  document.getElementById("hintModal").style.display =
    "block";

}


function closeHintModal() {

  document.getElementById("hintModal").style.display =
    "none";

}


/* =========================================================
   AKTUELLES – MELDUNGEN
   ========================================================= */

function openNoticeModal(
  title,
  icon,
  text,
  date,
  signature
) {

  document.getElementById("noticeTitle").innerText =
    icon + " " + title;

  document.getElementById("noticeText").innerText =
    text;

  document.getElementById("noticeDate").innerText =
    date;

  document.getElementById("noticeSignature").innerText =
    signature;


  document.getElementById("noticeModal").style.display =
    "block";

}


function closeNoticeModal() {

  document.getElementById("noticeModal").style.display =
    "none";

}
