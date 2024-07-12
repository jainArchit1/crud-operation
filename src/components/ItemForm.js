import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem, updateItem } from "../store/slice";
import styles from "../styles/ItemForm.module.scss";

const ItemForm = ({ existingItem, onSave }) => {
  const [name, setName] = useState(existingItem ? existingItem.name : "");
  const dispatch = useDispatch();

  useEffect(() => {
    setName(existingItem ? existingItem.name : "");
  }, [existingItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      id: existingItem ? existingItem.id : Date.now(),
      name,
    };
    if (existingItem) {
      dispatch(updateItem(item));
      onSave(item); // Notify parent of the update
    } else {
      dispatch(addItem(item));
    }
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
        required
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        {existingItem ? "Update" : "Add"} Item
      </button>
    </form>
  );
};

export default ItemForm;
