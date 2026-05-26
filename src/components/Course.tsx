// src/components/Course.tsx

import type { Item } from "../data/item.ts";

// TODO: Replace GOLD by a coin icon
export default function Course(item: Item) {
  return (
    <div id={item.name}>
      <img src={item.path} />
      <h4>
        <strong>{item.name}</strong>
      </h4>
      <p>{item.description}</p>
      <p>{item.price} G</p>
    </div>
  );
}
