export type Card = "2" | "3" | "4" | "5" | "6" | "7" | "Q" | "J" | "K" | "A";

const defaultOrder: Card[] = ["4", "5", "6", "7", "Q", "J", "K", "A", "2", "3"];
const suits = ["♢", "♠", "♡", "♣"];

export const useCards = (tableCard: Card) => {
  const tableCardIndex = defaultOrder.findIndex((value) => value === tableCard);
  const order: string[] = [...defaultOrder];
  const isLast = tableCardIndex === order.length - 1;
  const strongestIdx = isLast ? 0 : tableCardIndex + 1;
  const strongestCard = order[strongestIdx];
  order.splice(strongestIdx, 1);
  suits.forEach((suit) => order.push(strongestCard + suit));

  return order;
};
