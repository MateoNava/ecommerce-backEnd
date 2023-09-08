const { DataTypes, Model, STRING, INTEGER } = require("sequelize");
const db = require("../config/db");

class Products extends Model {}

Products.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    team: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: STRING,
      allowNull: false,
    },
    year: {
      type: INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
    rate: {
      type: DataTypes.INTEGER,
    },
    reviews: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
    urlImg: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "products" }
);

/* Products.bulkCreate([{
  name: "Camiseta Retro Maradona 1993",
  type: "camiseta",
  size: ["M", "XL", "S"],
  team: "Newell´s",
  country: "Argentina",
  year: 1993,
  price: 39.99,
  stock: 100,
  description: "Camiseta Retro de Newell´s - Maradona #10 - 1993",
  urlImg: [
    "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20220420_092710-5342fc330e2a5cbc2716504584747851-1024-1024.webp",
    "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20220420_092637-25e7dcca9b63ef54b616504584747652-1024-1024.webp",
  ],
},
{
  name: "Pantalon de Futbol",
  type: "pantalon",
  size: ["M", "XL", "S"],
  team: "Barcelona",
  country: "España",
  year: 2010,
  price: 99.99,
  stock: 33,
  description: "Pantalon oficial del Barca para la temporada 2010",
  urlImg: [
    "https://static.nike.com/a/images/t_default/28bcabff-a756-4a0c-8f2d-e95a261a6228/pantalones-fc-barcelona-jdi-qQ4Md0.png",
    "https://ejemplo.com/pantalon2.jpg",
  ],
},
{
  name: "Pantalon de Futbol",
  type: "pantalon",
  size: ["M", "XL", "S"],
  team: "Barcelona",
  country: "España",
  year: 2010,
  price: 99.99,
  stock: 33,
  description: "Pantalon oficial del Barca para la temporada 2010",
  urlImg: [
    "https://static.nike.com/a/images/t_default/28bcabff-a756-4a0c-8f2d-e95a261a6228/pantalones-fc-barcelona-jdi-qQ4Md0.png",
    "https://ejemplo.com/pantalon2.jpg",
  ],
},
{
  name: "Pelota de Futbol Jabulani 2010",
  type: "pelota",
  size: ["M", "XL", "S"],
  team: "none",
  country: "All",
  year: 2010,
  price: 99.99,
  stock: 33,
  description: "Pelota de la marca Adidas (Edicion Mundial 2010)",
  urlImg: [
    "https://museodefutbol.com/wp-content/uploads/2020/06/jabulani.jpg",
    "https://ejemplo.com/pantalon2.jpg",
  ],
},
{
  name: "Short de futbol Brasil",
  type: "short",
  size: ["M", "XL", "S"],
  team: "Brasil",
  country: "Brasil",
  year: 2010,
  price: 99.99,
  stock: 33,
  description: "Short oficial de la Seleccion de Brasil de los años 90s",
  urlImg: [
    "https://i.ebayimg.com/thumbs/images/g/VW0AAOSw4pVk3Fiv/s-l640.jpg",
    "https://ejemplo.com/pantalon2.jpg",
  ],
},
{
  name: "Camiseta Holanda año 90/92",
  type: "camiseta",
  size: ["M", "XL", "S"],
  team: "Holanda",
  country: "Holanda",
  year: 2010,
  price: 99.99,
  stock: 33,
  description: "Camiseta oficial de la Seleccion de Holanda de los años 1990/1992",
  urlImg: [
    "https://acdn.mitiendanube.com/stores/002/292/348/products/87012c881-4609742bdd0668a14e16714758002635-1024-1024.jpg",
    "https://ejemplo.com/pantalon2.jpg",
  ],
},
{
  name: "Pantalon de Futbol",
  type: "pantalon",
  size: ["M", "XL", "S"],
  team: "Barcelona",
  country: "España",
  year: 2010,
  price: 99.99,
  stock: 33,
  description: "Pantalon oficial del Barca para la temporada 2010",
  urlImg: [
    "https://static.nike.com/a/images/t_default/28bcabff-a756-4a0c-8f2d-e95a261a6228/pantalones-fc-barcelona-jdi-qQ4Md0.png",
    "https://ejemplo.com/pantalon2.jpg",
  ],
}]) */



module.exports = Products;
