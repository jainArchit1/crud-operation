import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import ItemForm from "../components/ItemForm";
import Item from "../components/Item";
import { updateItem } from "../store/slice";
import styles from "../styles/Home.module.scss";

const Home = () => {
  const items = useSelector((state) => state.items.items);
  const [editingItem, setEditingItem] = useState(null);
  const dispatch = useDispatch();

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  const handleUpdate = (item) => {
    dispatch(updateItem(item));
    setEditingItem(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles["container-inner"]}>
        <h1>CRUD Operations</h1>
        <ItemForm existingItem={editingItem} onSave={handleUpdate} />
        <div className={styles.itemsList}>
          {items.map((item) => (
            <Item key={item.id} item={item} onEdit={() => handleEdit(item)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
