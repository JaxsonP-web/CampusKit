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

function showEquipment() {
  const selectedCategory = category.value;
  const matchingEquipment = equipment.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );

  results.textContent = `Showing ${matchingEquipment.length} of ${equipment.length} items.`;

  const list = document.createElement("ul");

  for (const item of matchingEquipment) {
    const listing = document.createElement("li");
    listing.textContent = `${item.name} — ${item.lender}`;
    list.append(listing);
  }

  equipmentList.replaceChildren(list);
}

category.addEventListener("change", showEquipment);
showEquipment();
