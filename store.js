let primjer_menu = {
  user_id: "afsffa1132",
  title: "My Restaurant Menu",
  categories: ["fish", "pizza", "pasta"],
  items: [
    {
      name: "Spaghetti Bolognese",
      description: "Classic Italian pasta with meat sauce",
      price: 12.99,
      kategorija: "pasta", // Reference to predefined item type
    },

    {
      name: "Spaghetti Bolognese",
      description: "Classic Italian pasta with meat sauce",
      price: 12.99,
      kategorija: "pasta", // Reference to predefined item type
    },
  ],
};

let menu_item = {
  name: "",
  price: 0.0,
  type: "",
  description: "",
};

let filtered_items = [
  {
    name: "Spaghetti Bolognese",
    description: "Classic Italian pasta with meat sauce",
    price: 12.99,
    kategorija: "pasta", // Reference to predefined item type
  },

  {
    name: "Spaghetti Bolognese",
    description: "Classic Italian pasta with meat sauce",
    price: 12.99,
    kategorija: "pasta", // Reference to predefined item type
  },
];
let primjer_backup = {
  user_id: "afsffa1132",
  title: "My Restaurant Menu",
  categories: ["fish", "pizza", "pasta"],
  items: [
    {
      name: "Spaghetti Bolognese",
      description: "Classic Italian pasta with meat sauce",
      price: 12.99,
      kategorija: "pasta", // Reference to predefined item type
    },

    {
      name: "Spaghetti Bolognese",
      description: "Classic Italian pasta with meat sauce",
      price: 12.99,
      kategorija: "pasta", // Reference to predefined item type
    },
  ],
  updated_at: 22 / 12 / 2023,
};
module.exports = {
  primjer_menu,

  filtered_items,
  primjer_backup,
};
