const Filters = ({ onHandleFilter, ratingsList }) => {
  return (
    <ul className="flex gap-x-4">
      {ratingsList.map((rating, i) => (
        <li
          className="cursor-pointer"
          onClick={() => onHandleFilter(rating)}
          key={rating}
        >
          {rating}⭐
        </li>
      ))}
    </ul>
  );
};

export default Filters;
