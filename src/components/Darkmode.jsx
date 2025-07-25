const Darkmode = () => {
  const toggleTheme = (e) => {
    if (e.target.checked) {
      document.getElementById("root").classList =
        "bg-gradient-to-b from-gray-800 to-black text-white";
    } else {
      document.getElementById("root").classList = "bg-gray-100 text-black";
    }
  };

  return (
    <div>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={toggleTheme}
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
      </label>
    </div>
  );
};

export default Darkmode;
