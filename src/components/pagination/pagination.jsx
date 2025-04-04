export const PaginationComponent = ({ total, page, onClick }) => {
  return (
    <>
      {(() => {
        const arr = [];
        for (let i = 1; i <= Math.ceil(total / 10); i++) {
          if (i === parseInt(page)) {
            arr.push(
              <div className="flex items-center text-xs justify-center w-6 h-6 bg-gray-100 dark:bg-gray-700 dark:text-gray-100 text-gray-500 rounded-md">
                <a>{i}</a>
              </div>
            );
          } else {
            arr.push(
              <button
                onClick={() => {
                  onClick(i);
                }}
                className="flex items-center text-xs justify-center w-6 h-6 bg-teal-600 text-white rounded-md"
              >
                <a>{i}</a>
              </button>
            );
          }
        }
        return arr;
      })()}
    </>
  );
};
