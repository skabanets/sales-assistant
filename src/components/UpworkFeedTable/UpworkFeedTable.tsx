import { useCallback, useMemo, useState } from "react";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { SortLabel } from "./SortLabel/SortLabel";
import { TitleFilterInput } from "./TitleFilterInput/TitleFilterInput";
import { DateCell, KeywordsCell, NumberCell, ScoreCell, TitleCell } from "./TableCell";

import { IUpworkFeedItemDTO } from "../../interfaces-submodule/interfaces/dto/upwork-feed/iupwork-feed-item.dto";
import {
  headerTextWrapper,
  ordinaryTextStyles,
  tableContainerStyles,
  tableHeadStyles,
  tableRowCellStyles,
  tableRowStyles,
  tablestyles,
} from "./UpworkFeedTableStyles";

const data = [
  {
    id: "6ceebd49-339e-4cd4-acdc-3f6e1c835c06",
    url: "https://www.upwork.com/jobs/Freelance-Frontend-Software-Engineer-React-Timer-Component_%7E01324b4e1239d722e7?source=rss",
    title: "Freelance Frontend Software Engineer - React Timer Component - Upwork",
    published: "2023-11-17T22:27:55.000Z",
    keywords: [
      "Frontend development",
      "JavaScript",
      "Typescript",
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
      "CSS frameworks",
      "Redux",
      "Node.js",
    ],
    score: 29,
    matchedCases: 8,
    matchedBlogs: 1,
    accountId: 1,
    presetId: "2126eb63-45d7-4af2-a65b-073c3b362039",
  },
];

export const UpworkFeedTable = () => {
  const [sortState, setSortState] = useState<{
    sortBy: string | null;
    sortDirection: "asc" | "desc" | null;
  }>({
    sortBy: null,
    sortDirection: null,
  });

  const handleSortChange = (accessorKey: string) => {
    setSortState(prevState => {
      if (prevState.sortBy === accessorKey) {
        const newDirection =
          prevState.sortDirection === "asc"
            ? "desc"
            : prevState.sortDirection === "desc"
            ? null
            : "asc";

        return {
          sortBy: newDirection ? accessorKey : null,
          sortDirection: newDirection,
        };
      } else {
        return {
          sortBy: accessorKey,
          sortDirection: "asc",
        };
      }
    });
  };

  const [value, setValue] = useState("");

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const handleClear = useCallback(() => {
    setValue("");
  }, []);

  const columns = useMemo<ColumnDef<IUpworkFeedItemDTO>[]>(
    () => [
      {
        accessorKey: "title",
        header: () => (
          <>
            <SortLabel
              headerTitle="Title"
              isSorted={sortState.sortBy === "title" ? sortState.sortDirection : null}
              onSortChange={() => handleSortChange("title")}
            />
            <TitleFilterInput value={value} handleChange={handleChange} handleClear={handleClear} />
          </>
        ),
        cell: ({ row }) => <TitleCell title={row.original.title} url={row.original.url} />,
      },
      {
        accessorKey: "published",
        header: () => (
          <>
            <SortLabel
              headerTitle="Published"
              isSorted={sortState.sortBy === "published" ? sortState.sortDirection : null}
              onSortChange={() => handleSortChange("published")}
            />
            <Box sx={{ height: "44px", border: "1px solid black", borderRadius: "8px" }}>Input</Box>
          </>
        ),
        cell: ({ row }) => <DateCell date={row.original.published} />,
      },
      {
        accessorKey: "keywords",
        header: () => (
          <>
            <Box sx={headerTextWrapper}>Keywords</Box>
            <Box sx={{ height: "44px", border: "1px solid black", borderRadius: "8px" }}>Input</Box>
          </>
        ),
        cell: ({ row }) => <KeywordsCell keywords={row.original.keywords} />,
      },
      {
        accessorKey: "score",
        header: () => (
          <>
            <SortLabel
              headerTitle="Score"
              isSorted={sortState.sortBy === "score" ? sortState.sortDirection : null}
              onSortChange={() => handleSortChange("score")}
            />
            <Box sx={{ height: "44px", border: "1px solid black", borderRadius: "8px" }}>Input</Box>
          </>
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
    [sortState, value, handleChange, handleClear]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableContainer sx={tableContainerStyles}>
      <Table sx={tablestyles}>
        <TableHead>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id} sx={tableHeadStyles}>
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
        <TableBody>
          {table.getRowModel().rows.map(row => {
            return (
              <TableRow key={row.id} sx={tableRowStyles}>
                {row.getVisibleCells().map(cell => {
                  return (
                    <TableCell key={cell.id} sx={tableRowCellStyles}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
