import { useState } from "react";

import Title from "./components/Title";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

import menu from "./data";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <Title title="Our Menu" />
      <div className="title-underline"></div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu menu={menuItems} />
    </main>
  );
};
export default App;
