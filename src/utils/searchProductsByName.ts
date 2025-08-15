type TProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
};

function searchProductsByName(products: TProduct[], query: string): TProduct[] {
  return products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()),
  );
}

const products: TProduct[] = [
  { id: 1, name: 'Shiitake', description: 'Supports heart health', price: 10 },
  { id: 2, name: 'Oyster', description: 'Boosts immunity', price: 12 },
  {
    id: 3,
    name: "Lion's Mane",
    description: 'Supports brain health',
    price: 15,
  },
];

console.log(searchProductsByName(products, 'shi'));

export default searchProductsByName;
