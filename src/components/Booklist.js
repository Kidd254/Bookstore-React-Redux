import { useSelector } from 'react-redux';
import Book from './Book';
import styles from '../Styles/BooksList.css';

function BooksList() {
  const { bookList } = useSelector((store) => store.books);
  return (
    <ul className={styles.bookList}>
      {
        bookList.map((item) => (
          <Book
            key={item.id}
            bookData={item}
          />
        ))
      }
    </ul>
  );
}

export default BooksList;
