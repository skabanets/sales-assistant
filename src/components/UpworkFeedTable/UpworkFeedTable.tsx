import { FC, useEffect, useMemo, useState } from "react";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { SortLabel } from "./SortLabel/SortLabel";
import { TitleFilterInput } from "./TitleInput/TitleInput";
import { DateSelector } from "./DateSelector/DateSelector";
import { OptionSelector } from "./OptionSelector/OptionSelector";
import { DateCell, KeywordsCell, NumberCell, ScoreCell, TitleCell } from "./TableCell";

import { IUpworkFeedItemDTO } from "../../interfaces-submodule/interfaces/dto/upwork-feed/iupwork-feed-item.dto";
import { UpworkFeedSearchBy } from "../../interfaces-submodule/enums/upwork-feed/upwork-feed-search-by.enum";
import { UpworkFeedSortBy } from "../../interfaces-submodule/enums/upwork-feed/upwork-feed-sort-by.enum";
import { SortDirection } from "../../interfaces-submodule/enums/common/sort-direction.enum";
import { keywordOptions, scoreOptions } from "../../constants";
import { useUniversalSearchParams } from "../../hooks";
import { ISortOption } from "../../types";
import {
  headerTextWrapper,
  largeCellStyles,
  mediumCellStyles,
  messageBoxStyles,
  ordinaryTextStyles,
  tableBodyStyles,
  tableContainerStyles,
  tableHeaderStyles,
  tableRowCellStyles,
  tableRowStyles,
  tablestyles,
} from "./UpworkFeedTableStyles";

export interface IUpworkFeedTableProps {
  items: IUpworkFeedItemDTO[];
}

export const UpworkFeedTable: FC<IUpworkFeedTableProps> = ({ items }) => {
  const navigate = useNavigate();
  const { searchParams, setParam } = useUniversalSearchParams();

  const initialSortState = {
    sortBy: (searchParams.get("sortBy") as UpworkFeedSortBy) || null,
    sortDirection: (searchParams.get("sortDirection") as SortDirection) || null,
  };
  const [sortState, setSortState] = useState<ISortOption>(initialSortState);

  useEffect(() => {
    setParam(sortState);
  }, [sortState]);

  const handleSortChange = (accessorKey: UpworkFeedSortBy) => {
    setSortState(prevState => {
      if (prevState.sortBy === accessorKey) {
        const newDirection =
          prevState.sortDirection === SortDirection.ASC
            ? SortDirection.DESC
            : prevState.sortDirection === SortDirection.DESC
            ? null
            : SortDirection.ASC;

        return {
          sortBy: newDirection ? accessorKey : null,
          sortDirection: newDirection,
        };
      } else {
        return {
          sortBy: accessorKey,
          sortDirection: SortDirection.ASC,
        };
      }
    });
  };

  const columns = useMemo<ColumnDef<IUpworkFeedItemDTO>[]>(
    () => [
      {
        accessorKey: "title",
        header: () => (
          <Box sx={largeCellStyles}>
            <SortLabel
              headerTitle="Title"
              isSorted={
                sortState.sortBy === UpworkFeedSortBy.Title ? sortState.sortDirection : null
              }
              onSortChange={() => handleSortChange(UpworkFeedSortBy.Title)}
            />
            <TitleFilterInput />
          </Box>
        ),
        cell: ({ row }) => <TitleCell title={row.original.title} url={row.original.url} />,
      },
      {
        accessorKey: "published",
        header: () => (
          <Box sx={mediumCellStyles}>
            <SortLabel
              headerTitle="Published"
              isSorted={
                sortState.sortBy === UpworkFeedSortBy.Published ? sortState.sortDirection : null
              }
              onSortChange={() => handleSortChange(UpworkFeedSortBy.Published)}
            />
            <DateSelector />
          </Box>
        ),
        cell: ({ row }) => <DateCell date={row.original.published} />,
      },
      {
        accessorKey: "keywords",
        header: () => (
          <Box sx={largeCellStyles}>
            <Box sx={headerTextWrapper}>Keywords</Box>
            <OptionSelector options={keywordOptions} filterKey={UpworkFeedSearchBy.Keywords} />
          </Box>
        ),
        cell: ({ row }) => <KeywordsCell keywords={row.original.keywords} />,
      },
      {
        accessorKey: "score",
        header: () => (
          <Box sx={mediumCellStyles}>
            <SortLabel
              headerTitle="Score"
              isSorted={
                sortState.sortBy === UpworkFeedSortBy.Score ? sortState.sortDirection : null
              }
              onSortChange={() => handleSortChange(UpworkFeedSortBy.Score)}
            />
            <OptionSelector options={scoreOptions} filterKey={UpworkFeedSearchBy.Score} />
          </Box>
        ),
        cell: ({ row }) => <ScoreCell score={row.original.score} />,
      },
      {
        accessorKey: "matchedCases",
        header: () => <Box sx={{ ...headerTextWrapper, ...ordinaryTextStyles }}>Matched cases</Box>,
        cell: ({ row }) => <NumberCell value={row.original.matchedCases} />,
      },
      {
        accessorKey: "matchedBlogs",
        header: () => <Box sx={{ ...headerTextWrapper, ...ordinaryTextStyles }}>Matched blogs</Box>,
        cell: ({ row }) => <NumberCell value={row.original.matchedBlogs} />,
      },
    ],
    [sortState]
  );

  const table = useReactTable({
    data: items,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableContainer sx={tableContainerStyles} className="scrollbar">
      <Table sx={tablestyles}>
        <TableHead sx={tableHeaderStyles}>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <TableCell key={header.id} colSpan={header.colSpan}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableHead>
        <TableBody sx={tableBodyStyles}>
          {items.length === 0 ? (
            <TableRow>
              <Box sx={messageBoxStyles}>No results found</Box>
            </TableRow>
          ) : (
            table.getRowModel().rows.map(row => {
              return (
                <TableRow
                  key={row.id}
                  sx={tableRowStyles}
                  onClick={() => navigate(`/upwork-feeds/${row.original.id}`)}
                >
                  {row.getVisibleCells().map(cell => {
                    return (
                      <TableCell key={cell.id} sx={tableRowCellStyles}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
