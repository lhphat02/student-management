import React from 'react';
import classNames from 'classnames';

const Table = ({ tableInstance }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table
      {...getTableProps()}
      className="relative w-full bg-white rounded-lg border"
    >
      <thead className=" border-2">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                className={classNames(
                  'px-4 py-2 text-left text-sm font-medium text-gray-600 uppercase tracking-wider',
                  column.className
                )}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="" {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="border-t border-gray-200">
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  className={classNames(
                    'px-4 py-2 text-sm font-normal text-gray-900',
                    cell.column.className
                  )}
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
