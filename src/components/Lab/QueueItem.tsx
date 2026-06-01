interface QueueItemProps {
  label: string;
  count: number;
}

const QueueItem: React.FC<QueueItemProps> = ({
  label,
  count,
}) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-600">{label}</span>
    <span className="bg-primary-light text-primary-dark text-xs px-3 py-1 rounded-full font-medium">
      {count}
    </span>
  </div>
);
export default QueueItem;