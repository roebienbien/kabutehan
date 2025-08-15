import React, { useState } from 'react';

// Example product list
const products = [
  { id: 1, name: 'Shiitake Mushroom' },
  { id: 2, name: "Lion's Mane" },
  { id: 3, name: 'Reishi Mushroom' },
  { id: 4, name: 'Maitake-Mushroom' },
];

// Function to normalize strings (remove spaces/special chars, lowercase)
const normalize = (str: string) =>
  str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

export default function ProductSearch() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<typeof products>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setQuery(input);

    if (input.trim() === '') {
      setSuggestions([]);
      return;
    }

    const normalizedInput = normalize(input);

    const filtered = products.filter((product) =>
      normalize(product.name).includes(normalizedInput),
    );

    setSuggestions(filtered);
  };

  const handleSelect = (name: string) => {
    setQuery(name);
    setSuggestions([]);
  };

  return (
    <div className="mx-auto max-w-sm">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search products..."
        className="w-full rounded border p-2"
      />
      {suggestions.length > 0 && (
        <ul className="rounded-b border border-t-0 bg-white shadow">
          {suggestions.map((product) => (
            <li
              key={product.id}
              onClick={() => handleSelect(product.name)}
              className="cursor-pointer p-2 hover:bg-gray-200"
            >
              {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
