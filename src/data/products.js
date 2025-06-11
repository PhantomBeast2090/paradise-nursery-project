// src/data/products.js

// 1. IMPORT YOUR LOCAL IMAGES
import monsteraImage from '../assets/images/monstera.jpg';
import pothosImage from '../assets/images/pothos.jpg';
import fiddleLeafImage from '../assets/images/fiddle-leaf.jpg';
import snakePlantImage from '../assets/images/snake-plant.jpg';
import succulentsImage from '../assets/images/succulents.jpg';
import orchidImage from '../assets/images/orchid.jpg';

export const products = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    price: 25.00,
    image: monsteraImage, // 2. USE THE IMPORTED VARIABLE
    category: 'Tropicals',
  },
  {
    id: 2,
    name: 'Fiddle Leaf Fig',
    price: 55.00,
    image: fiddleLeafImage, // Use the imported variable
    category: 'Trees',
  },
  {
    id: 3,
    name: 'Snake Plant',
    price: 15.00,
    image: snakePlantImage, // Use the imported variable
    category: 'Low-Light',
  },
  {
    id: 4,
    name: 'Golden Pothos',
    price: 12.00,
    image: pothosImage, // Use the imported variable
    category: 'Tropicals',
  },
  {
    id: 5,
    name: 'Assorted Succulents',
    price: 18.00,
    image: succulentsImage, // Use the imported variable
    category: 'Low-Light',
  },
  {
    id: 6,
    name: 'Phalaenopsis Orchid',
    price: 30.00,
    image: orchidImage, // Use the imported variable
    category: 'Flowering',
  },
];