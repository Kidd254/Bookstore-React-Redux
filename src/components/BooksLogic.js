import BookList from './Booklist';
import NewBook from './NewBook';

function getInitialTodos() {
  const books = [
    {
      id: '12asd52',
      name: 'Shreds of Tenderness',
      author: 'John Ruganda',
      lastChapter: '10',
      percent: '25%',
      status: 'Completed',
    },
    {
      id: '12asd5222',
      name: 'The River Between',
      author: 'Ngungi Wa Thiongo',
      lastChapter: '10',
      percent: '88%',
      status: 'Completed',
    },
    {
      id: '1as2asd52',
      name: 'My Life in Crime',
      author: 'John Kiriamiti',
      lastChapter: '13',
      percent: '77%',
      status: 'Completed',
    },
  ];
  return books || [];
}

function BooksLogic() {
  const todos = getInitialTodos();
  return (
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      <BookList
        booksData={todos}
      />
      <NewBook />
    </section>
  );
}

export default BooksLogic;
