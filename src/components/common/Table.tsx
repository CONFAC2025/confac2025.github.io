interface TableProps<T> {
  columns: { key: keyof T; label: string }[];
  rows: T[];
}

const Table = <T extends Record<string, any>>({
  columns,
  rows,
}: TableProps<T>) => {
  return (
    <div className="border-[1px] border-border-light-gray rounded-[12px] overflow-hidden overflow-x-auto shadow-2xl">
      <table className="min-w-full divide-y divide-border-light-gray">
        <thead className="bg-light-purple1 h-[48px]">
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className="px-[24px] py-[15px] text-left text-[16px] font-medium tracking-wider"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-border-light-gray">
          {rows.map((row, idx) => (
            <tr key={idx}>
              {columns.map((col, idx) => (
                <td
                  key={String(col.key)}
                  className={`px-6 py-4 whitespace-nowrap ${
                    idx === 0 ? "font-medium" : "font-light"
                  }`}
                >
                  {String(row[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
