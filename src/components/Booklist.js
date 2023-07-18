import PropTypes from 'prop-types';
import Book from './Book';
import styles from '../Styles/BooksList.css';

function BookList(
  {
    booksData,
  },
) {
  return (
    <ul className={styles.bookList}>
      {
        booksData.map((item) => (
          <Book
            key={item.id}
            bookData={item}
          />
        ))
      }
    </ul>
  );
}

BookList.defaultProps = {
  booksData: [],
};

BookList.propTypes = {
  booksData: PropTypes.instanceOf(Array),
};

export default BookList;
