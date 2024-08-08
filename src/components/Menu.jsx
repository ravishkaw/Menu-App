import MenuItem from "./MenuItem";

const Menu = ({ menu, filterItems }) => {
  return (
    <section className="menu-container">
      {menu.map((menuItem) => {
        return (
          <MenuItem key={menuItem.id} {...menuItem} />
        );
      })}
    </section>
  );
};
export default Menu;
