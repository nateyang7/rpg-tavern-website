// src/data/item.ts

/**
 * Represents an item.
 */
export interface Item {
  /** Item's name. */
  name: string;

  /** Item's image path. */
  path: string;

  /** Item's description. */
  description: string;

  /** Item's price in gold (G). */
  price: number;
}
