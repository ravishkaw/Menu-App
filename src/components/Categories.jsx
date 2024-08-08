const Categories = ({ categories, filterItems }) => {
  return (
    <div className="category-btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className="btn category-btn"
            onClick={() => {
              filterItems(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
