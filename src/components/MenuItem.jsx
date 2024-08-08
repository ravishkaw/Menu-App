const MenuItem = (menuItem) => {
  const { title, category, price, img, desc } = menuItem;
  return (
    <article className="menu-item">
      <img src={img} alt={title} />
      <div className="title-header">
        <h1>{title}</h1>
        <p className="price">$ {price}</p>
      </div>
      <p className="description">{desc}</p>
    </article>
  );
};
export default MenuItem;
