import { useTable } from 'react-table';
import { useRouter } from 'next/router';

export function DataTable({ columns, data }) {
   const tableInstance = useTable({
      columns,
      data,
   });
   const router = useRouter();

   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      tableInstance;

   return (
      <div className='overflow-x-auto'>
         <table
            {...getTableProps()}
            className='table table-auto min-w-[720px] w-full border-separate border-spacing-y-2'
         >
            <thead className='space-y-10'>
               {headerGroups.map((headerGroup, i) => (
                  <tr
                     className='mb-5'
                     key={i}
                     {...headerGroup.getHeaderGroupProps()}
                  >
                     {headerGroup.headers.map((column, i) => (
                        <th
                           key={i}
                           {...column.getHeaderProps()}
                           className='text-[#A6B7D4] text-xs lg:text-sm font-medium text-left'
                        >
                           {column.render('Header')}
                        </th>
                     ))}
                  </tr>
               ))}
            </thead>
            <tbody {...getTableBodyProps()}>
               {rows.map((row, i) => {
                  prepareRow(row);
                  return (
                     <tr
                        className='cursor-pointer hover:bg-slate-100 border-collapse relative'
                        key={i}
                        {...row.getRowProps()}
                     >
                        {row.cells.map((cell, i) => {
                           return (
                              <td
                                 className='text-xs py-1 lg:py-2 md:text-sm text-black-50 border-collapse'
                                 key={i}
                                 {...cell.getCellProps()}
                              >
                                 {cell.render('Cell')}
                              </td>
                           );
                        })}
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
}
