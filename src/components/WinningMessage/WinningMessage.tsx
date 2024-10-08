import StartButton from "../StartButton/StartButton";

const WinningMessage = () => {
  return (
    <div className="winning-message" data-testid="winning-message">
      <p>You won!</p>
      <StartButton />
    </div>
  );
};

export default WinningMessage;
