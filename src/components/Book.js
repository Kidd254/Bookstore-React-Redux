import PropTypes from 'prop-types';
import styles from '../Styles/Book.css';

function Book({ bookData }) {
  return (
    <>
      <article className={styles.article}>
        <div className={styles.mainContent}>
          <h4 className={styles.bookCat}>Novel</h4>
          <h2 className={styles.bookTitle}>{bookData.name}</h2>
          <h4 className={styles.bookCat}>{bookData.author}</h4>
          <ul className={styles.buttonList}>
            <li>Comments</li>
            <li>Remove</li>
            <li>Edit</li>
          </ul>
        </div>
        <div>
          <div>Circle</div>
          <div>
            <h2>{bookData.percent}</h2>
            <h4 className={styles.bookCat}>{bookData.status}</h4>
          </div>
        </div>
        <div>
          <h3>Current chapter</h3>
          <h3>{bookData.lastChapter}</h3>
          <button type="button">Update progress</button>
        </div>
      </article>
    </>
  );
}

Book.defaultProps = {
  bookData: null,
};

Book.propTypes = {
  bookData: PropTypes.instanceOf(Object),
};

export default Book;
