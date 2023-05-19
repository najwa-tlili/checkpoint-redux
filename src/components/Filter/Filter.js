import React from "react";

const Filter = ({ filter, onFilterChange }) => {
  const handleFilterChange = e => {
    onFilterChange(e.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name="filter"
          value="all"
          checked={filter === 'all'}
          onChange={handleFilterChange}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="done"
          checked={filter === 'done'}
          onChange={handleFilterChange}
        />
        Done
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="notDone"
          checked={filter === 'notDone'}
          onChange={handleFilterChange}
        />
        Not done
      </label>
    </div>
  );
};

export default Filter; 