const Card = () => {
  return (
    <div
      className="card border border-dark"
      style={{ width: String(500) + "px" }}
    >
      <div className="card-header bg-primary">
        <h1 className="card-title text-center">This is a card.</h1>
      </div>
      <div className="card-body">
        <p className="card-text text-justified">
          This is a text within the card. this text will be used to see if card
          works properly of not. I hope it works properly and this card will
          litraly makes me happy. I'm in hope of having sex with{" "}
          <a className="card-link" href="https://google.com/">
            Gaming
          </a>
          .
        </p>
      </div>
      <div className="card-footer align-self-end">
        <button
          role="button"
          type="button"
          className="btn btn-outline-info rounded-pill"
        >
          This is a button.
        </button>
      </div>
    </div>
  );
};

export default Card;
