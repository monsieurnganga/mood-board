export function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img className="mood-board-image" src={image} alt={description} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard() {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>

      <div className="mood-board">
        <MoodBoardItem
          color="#ff6b6b"
          image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
          description="Relaxing beach getaway"
        />
        <MoodBoardItem
          color="#4ecdc4"
          image="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80"
          description="Mountain adventure"
        />
        <MoodBoardItem
          color="#556270"
          image="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80"
          description="Cozy city escape"
        />
      </div>
    </div>
  );
}
