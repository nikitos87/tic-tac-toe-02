import "./Board.css";
import Box from "./Box";

const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {board.map((value, idx) => {
        return (
          <Box
            value={value}
            onClick={() => value === null && onClick(idx)}
            key={idx}
          />
        );
      })}
    </div>
  );
};

export default Board;
