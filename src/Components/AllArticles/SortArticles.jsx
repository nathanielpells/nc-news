export default function SortArticles({sortBy, setSortBy}){
    const sortOptions = [
        {name: 'Date', apiName: 'created_at' },
        { name: 'Comments', apiName: 'comment_count' },
        { name: 'Votes', apiName: 'votes' },
    ]

    const handleChange = (e) => {
        setSortBy(e.target.value);
      };

      return (
        <div className="sort-order">
          <label htmlFor="sort-by">Sort by:</label>
          <select
            className="sort-selector"
            onChange={handleChange}
            name="sort-by"
            id="sort-by"
            value={sortBy} 
          >
            {sortOptions.map((sort, index) => {
              return (
                <option key={sort.name} value={sort.apiName}>
                  {sort.name}
                </option>
              );
            })}
          </select>
        </div>
      );
    }
