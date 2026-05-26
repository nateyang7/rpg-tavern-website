// src/components/Course.tsx

import type { Item } from "../data/item.ts";

export default function Course(item: Item) {
  return (
    <div id={item.name}>
      <img src={item.path} />
      <h4>
        <strong>{item.name}</strong>
      </h4>
      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
  );
}
