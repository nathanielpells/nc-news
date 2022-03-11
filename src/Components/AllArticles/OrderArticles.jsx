export default function OrderArticles({ orderBy, setOrderBy }) {
    const orderBys = [
      { name: 'Descending', apiName: 'DESC' },
      { name: 'Ascending', apiName: 'ASC' },
    ];
  
    const handleChange = (e) => {
      setOrderBy(e.target.value);
    };
  
    return (
      <div className="sort-order">
        <label htmlFor="order-by">Order by:</label>
        <select
          className="sort-selector"
          onChange={handleChange}
          name="order-by"
          id="order-by"
          value={orderBy} 
        >
          {orderBys.map((order, index) => {
            return (
              <option key={order.name} value={order.apiName}>
                {order.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }