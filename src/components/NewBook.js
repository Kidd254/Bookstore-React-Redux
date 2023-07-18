function NewBook() {
  return (
    <>
      <h4>ADD NEW BOOK</h4>
      <form className="form-container">
        <input
          type="text"
          placeholder="Book title"
          className="input-text"
        />
        <input
          type="text"
          placeholder="Author name"
          className="input-text"
        />
        <button className="input-submit" type="submit">
          Add Book
        </button>
      </form>
    </>
  );
}

export default NewBook;
