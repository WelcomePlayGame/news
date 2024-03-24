const SelectedCategory = ({ onChange }) => {
  const categories = ['war', 'economy'];

  return (
    <main className={`w-[200px] mt-[50xp]`}>
      <select onChange={onChange} className={``}>
        {categories.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    </main>
  );
};
export default SelectedCategory;
