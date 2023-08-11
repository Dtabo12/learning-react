import '../assets/styles/Square.css'

// eslint-disable-next-line react/prop-types
function Square({ children, isSelected, updateBoard, index }) {
    const className = isSelected ? 'square active' : 'square';

    const handleClick = () => {
        if (index === undefined) return;
        updateBoard(index);
    }

    return (
        <div className={className} onClick={handleClick}>
            {children}
        </div>
    )
}
export default Square;