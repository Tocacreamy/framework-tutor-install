
import { createStore } from 'framework7';

const store = createStore({
  state: {
    products: [
      {
        id: '1',
        title: 'Veluxe Enchanté Sling',
        description: 'The Veluxe Enchanté Sling exudes effortless glamour. Crafted from premium Italian leather, it features a sleek design with gold-tone hardware and an adjustable strap for versatile wear. Perfect for both day and night, the Enchanté Sling adds a touch of luxury to any outfit.'
      },
      {
        id: '2',
        title: 'Veluxe Noir Élégance',
        description: 'Sophisticated and bold, the Noir Élégance bag is a minimalist masterpiece. Its structured silhouette, crafted from rich calfskin, radiates elegance with a deep black finish. A discreet front pocket and a satin interior make it as practical as it is stunning.'
      },
      {
        id: '3',
        title: 'Veluxe Lustra Classic',
        description: ' A signature piece in the Veluxe collection, the Lustra Classic combines luxury with function. The bag’s polished leather exterior is complemented by its spacious interior, making it the ideal companion for your everyday essentials. Available in a range of neutral tones.'
      },
      {
        id: '4',
        title: 'Veluxe Brio Belle',
        description: 'The Brio Belle Sling is designed for the modern woman who appreciates subtlety and grace. Made from buttery-soft lambskin leather, it’s accentuated with delicate stitching and a striking silver-tone chain. Its compact size makes it perfect for evening occasions.'
      },
      {
        id: '5',
        title: 'Veluxe Opulence',
        description: 'Opulence by Veluxe is a statement of luxury and refinement. Crafted from exotic crocodile-embossed leather, this sling bag is the ultimate status symbol. Featuring a spacious interior and a magnetic flap closure, it is designed for those who demand attention and appreciate the finer things in life.'
      },
    ]
  },
  getters: {
    products({ state }) {
      return state.products;
    }
  },
  actions: {
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
  },
})
export default store;
