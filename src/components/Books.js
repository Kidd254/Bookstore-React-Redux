import BookList from './Booklist';
import NewBook from './NewBook';
import styles from '../stylesF/Books.module.css';

function Books() {
  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: '20px',
      }}
      >
        <section style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '30px',
        }}
        >
          <BookList />
          <div className={styles.horizontalDivider}> </div>
          <NewBook />
        </section>
      </div>
    </>
  );
}

export default Books;
