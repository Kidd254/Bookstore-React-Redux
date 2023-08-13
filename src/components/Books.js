import BookList from './Booklist';
import NewBook from './NewBook';
import styles from '../stylesF/Books.module.css';

function Books() {
  return (
    <>
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center p-5">
          <BookList />
          <div className={styles.horizontalDivider}> </div>
          <NewBook />
        </div>
      </div>
    </>
  );
}

export default Books;
