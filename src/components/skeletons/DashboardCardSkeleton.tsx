import Skeleton from 'react-loading-skeleton';

const DashboardCardSkeleton = () => {
  return (
    <div className="card p-3">
      <Skeleton height={25} width="60%" />
      <Skeleton height={40} className="mt-3" />
      <Skeleton width="40%" />
    </div>
  );
};

export default DashboardCardSkeleton;