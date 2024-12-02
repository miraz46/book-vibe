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
  }
};

export {
  getStoredBookLists,
  saveStoredBookLists,
  getStoredWishLists,
  saveStoredWishLists,
};
