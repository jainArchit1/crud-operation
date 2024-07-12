import { useDispatch } from "react-redux";
import { deleteItem } from "../store/slice";
import styles from "../styles/Item.module.scss";

const Item = ({ item, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem(item.id));
  };

  return (
    <div className={styles.item}>
      <h3>{item.name}</h3>
      <div>
        <button onClick={onEdit} className={styles.editButton}>
          Edit
        </button>
        <button onClick={handleDelete} className={styles.deleteButton}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Item;
