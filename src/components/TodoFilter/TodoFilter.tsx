import React from 'react';
import { Filter } from '../../types/Filter';

type Props = {
  query: string;
  setQuery: (query: string) => void;
  filter: Filter;
  setFilter: (filter: Filter) => void;
};

export const TodoFilter: React.FC<Props> = ({
  query,
  setQuery,
  setFilter,
  filter,
}) => {
  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            value={filter}
            onChange={(e) => setFilter(e.target.value as Filter)}
          >
            <option value={Filter.All}>All</option>
            <option value={Filter.Active}>Active</option>
            <option value={Filter.Completed}>Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {!!query && (
            /* eslint-disable-next-line jsx-a11y/control-has-associated-label */
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={() => setQuery('')}
            />
          )}
        </span>
      </p>
    </form>
  );
};