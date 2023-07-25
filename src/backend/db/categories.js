import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "fiction",
    categoryAltName: "Fiction",
    description:
      "Literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "non-fiction",
    categoryAltName: "Non Fiction",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryName: "self-help",
    categoryAltName: "Self Help",
    description:
      "A self-help book is one that is written with the intention to instruct its readers on solving personal problems.",
  },
];
