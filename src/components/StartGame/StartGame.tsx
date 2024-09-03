import StartButton from "../StartButton/StartButton";

const StartGame = () => {
  return (
    <div>
      <h1>Game Instructions</h1>
      <ol>
        <li>Click on Play button</li>
        <li>
          Click on a tile. The number that the tile contains will be reveiled.
          Try to remember its position.
        </li>
        <li>
          Click on another tile. The number that the tile contains will be
          reveiled. If this number matches the number on the other tile, you
          found a match and the tiles turn green.
        </li>
        <li>When you find all matches, you win!</li>
      </ol>
      <StartButton />
    </div>
  );
};

export default StartGame;
