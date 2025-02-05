import styles from "./styles/filter.module.css";

export const Filter = ({ activeFilterValue, updateCurrentFilter }) => {
  const filterOptions = ["all", "active", "completed"];

  const handleFilterClick = (filterType) => () => {
    updateCurrentFilter(filterType);
  };

  return (
    <div className={styles.filterButtons}>
      {filterOptions.map((filter) => {
        const isActive = activeFilterValue === filter;

        return (
          <button key={filter} onClick={handleFilterClick(filter)} className={isActive ? styles.ActiveFilterButton : styles.InActiveFilterButton}>
            {filter}
          </button>
        );
      })}
    </div>
  );
};
