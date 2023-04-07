import React, { useEffect, useMemo, useState } from 'react';
import MaterialReactTable from 'material-react-table';

import ApiService from '../../service/Api.service';
const Example = () => {
  //data and fetching state
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [rowCount, setRowCount] = useState(0);

  //table state
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  //if you want to avoid useEffect, look at the React Query example instead
  useEffect(() => {
    const fetchData = async () => {
      if (!data.length) {
        setIsLoading(true);
      } else {
        setIsRefetching(true);
      }

      const url = new URL(
        'api/data.json',
        'http://localhost:3000/');
        
      url.searchParams.set(
        'start',
        `${pagination.pageIndex * pagination.pageSize}`,
      );
      url.searchParams.set('size', `${pagination.pageSize}`);
      url.searchParams.set('filters', JSON.stringify(columnFilters ?? []));
      url.searchParams.set('globalFilter', globalFilter ?? '');
      url.searchParams.set('sorting', JSON.stringify(sorting ?? []));
      var data1 ={}
      data1["size"] = pagination.pageSize;
      data1["start"] =  `${pagination.pageIndex * pagination.pageSize}`;
      data1["filters"] = JSON.stringify(columnFilters ?? []);
      data1["globalFilter"] = globalFilter ?? '';
      data1["sorting"] = JSON.stringify(sorting ?? []);

      try {
       // const response = await fetch(url.href);
        // const json = await response.json();
        var menuData = await ApiService.httpPost("/acc/acc_ledger/report", data1)
        setData(menuData.data);
        setRowCount(menuData.meta.totalRowCount);
      } catch (error) {
        setIsError(true);
        console.error(error);
        return;
      }
      setIsError(false);
      setIsLoading(false);
      setIsRefetching(false);
    };
    fetchData();
  }, [
    columnFilters,
    globalFilter,
    pagination.pageIndex,
    pagination.pageSize,
    sorting,
  ]);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
      },
      //column definitions...
      {
        accessorKey: 'group_id',
        header: 'Group Id',
      },
      {
        accessorKey: 'name',
        header: 'Name',
      },
      {
        accessorKey: 'code',
        header: 'code',
      },
      {
        accessorKey: 'op_balance',
        header: 'op_balance',
      },
      {
        accessorKey: 'op_balance_dc',
        header: 'op_balance_dc',
      },
      {
        accessorKey: 'type',
        header: 'type',
      },
      {
        accessorKey: 'reconciliation',
        header: 'reconciliation',
      },
      {
        accessorKey: 'notes',
        header: 'notes',
      },
      //end
    ],
    [],
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
       
      getRowId={(row) => row.phoneNumber}
      initialState={{ showColumnFilters: false , showGlobalFilter:true}}
      manualFiltering
      manualPagination
      manualSorting
      muiToolbarAlertBannerProps={
        isError
          ? {
            color: 'error',
            children: 'Error loading data',
          }
          : undefined
      }
      onColumnFiltersChange={setColumnFilters}
      onGlobalFilterChange={setGlobalFilter}
      onPaginationChange={setPagination}
      onSortingChange={setSorting}
      rowCount={rowCount}
      state={{
        columnFilters,
        globalFilter,
        isLoading,
        pagination,
        showAlertBanner: isError,
        showProgressBars: isRefetching,
        sorting,
      }}
    />
  );
};

export default Example;
