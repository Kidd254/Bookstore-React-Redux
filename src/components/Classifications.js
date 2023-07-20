import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';
import styles from '../stylesF/Category.module.css';

function Categories() {
  const { status } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div className={styles.homeContainer}>
      <h2 className={styles.h2}>Welcome to our main page!</h2>
      <button
        className={styles.primaryBtnBig}
        type="button"
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        Check Status
      </button>
      <p className={styles.p}>
        {status}
      </p>
    </div>
  );
}

export default Categories;
