const equipment = [
  { name: "Portable speaker kit", category: "events", lender: "Open Mic Club" },
  { name: "Display easels", category: "events", lender: "Studio Arts Club" },
  { name: "Volleyball practice kit", category: "sports", lender: "North Quad Volleyball Team" },
  { name: "Basketball practice kit", category: "sports", lender: "West Court Basketball Team" },
  { name: "Acoustic guitar", category: "music", lender: "Cedar Hall Music Ensemble" },
  { name: "Digital keyboard", category: "music", lender: "Campus Arts Department" },
  { name: "Projector and screen", category: "events", lender: "North Hall Film Club" },
  { name: "Welcome table kit", category: "events", lender: "Campus Volunteer Club" }
];

const category = document.getElementById("category");
const results = document.getElementById("results");
const equipmentList = document.getElementById("equipment-list");
const requestForm = document.getElementById("request-form");
const selectedKit = document.getElementById("selected-kit");
const requestList = document.getElementById("request-list");
const requestStatus = document.getElementById("request-status");

let selectedEquipment = "";

function showEquipment() {
  const selectedCategory = category.value;
  const matchingEquipment = equipment.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );

  results.textContent = `Showing ${matchingEquipment.length} of ${equipment.length} items.`;

  const list = document.createElement("ul");

  for (const item of matchingEquipment) {
    const listing = document.createElement("li");
    listing.append(document.createTextNode(`${item.name} — ${item.lender} `));

    const requestButton = document.createElement("button");
    requestButton.type = "button";
    requestButton.textContent = "Request kit";
    requestButton.dataset.itemName = item.name;

    listing.append(requestButton);
    list.append(listing);
  }

  equipmentList.replaceChildren(list);
}

equipmentList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-item-name]");

  if (!button) {
    return;
  }

  selectedEquipment = button.dataset.itemName;
  selectedKit.textContent = `Kit requested: ${selectedEquipment}`;
  requestStatus.textContent = "";
  requestForm.hidden = false;
  document.getElementById("borrowing-group").focus();
  requestForm.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

requestForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(requestForm);
  const borrowingGroup = formData.get("borrowingGroup").trim();
  const pickupWindow = formData.get("pickupWindow");
  const purpose = formData.get("purpose").trim();

  const request = document.createElement("li");
  request.textContent =
    `${selectedEquipment} — ${borrowingGroup}; pickup: ${pickupWindow}; purpose: ${purpose}`;
  requestList.append(request);

  requestStatus.textContent = "Demo request added.";
  requestForm.reset();
  requestForm.hidden = true;
  selectedEquipment = "";
});

category.addEventListener("change", showEquipment);
showEquipment();
