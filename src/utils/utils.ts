export const getStartingBoard = (numberOfTiles: number) => {
  const numbers: number[] = [];
  for (let i = 1; i <= numberOfTiles / 2; i++) {
    for (let j = 1; j <= 2; j++) {
      numbers.push(i);
    }
  }

  return numbers
    .map((number) => ({ value: number, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};
