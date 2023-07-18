import BooksLogic from './BooksLogic';

function Books() {
  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <BooksLogic />
      </div>
    </>
  );
}

export default Books;
