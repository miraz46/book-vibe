import { toast } from "react-toastify";

const getStoredBookLists = () => {
  const storedBookLists = localStorage.getItem("book-lists");
  if (storedBookLists) {
    return JSON.parse(storedBookLists);
  }
  return [];
};

const saveStoredBookLists = (id) => {
  const storedBookLists = getStoredBookLists();
  const exists = storedBookLists.find((bookId) => bookId === id);
  if (!exists) {
    storedBookLists.push(id);
    localStorage.setItem("book-lists", JSON.stringify(storedBookLists));
    toast("Added to the read books section.");
  } else {
    toast.error("Already added to the read books");
  }
};

const getStoredWishLists = () => {
  const storedWishLists = localStorage.getItem("wish-lists");
  if (storedWishLists) {
    return JSON.parse(storedWishLists);
  }
  return [];
};

const saveStoredWishLists = (id) => {
  const storedWishLists = getStoredWishLists();
  const exists = storedWishLists.find((bookId) => bookId === id);
  if (!exists) {
    storedWishLists.push(id);
    localStorage.setItem("wish-lists", JSON.stringify(storedWishLists));
    toast("Added to the wish lists section.");
  } else {
    toast.error("Already added to the wish lists");
  }
};

export {
  getStoredBookLists,
  saveStoredBookLists,
  getStoredWishLists,
  saveStoredWishLists,
};
