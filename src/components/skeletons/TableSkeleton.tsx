import Skeleton from 'react-loading-skeleton';

interface TableSkeletonProps {
  rows?: number;
  columns?: number;
}

const TableSkeleton = ({
  rows = 10,
  columns = 7,
}: TableSkeletonProps) => {
  return (
    <tbody>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <tr key={rowIndex}>
          {Array.from({ length: columns }).map((_, colIndex) => (
            <td key={colIndex}>
              <Skeleton />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableSkeleton;