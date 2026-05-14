interface SkeletonProps {
  className?: string;
}

const Skeleton = ({
  className = "",
}: SkeletonProps) => {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-xl
        bg-gray-200
        before:absolute
        before:inset-0
        before:-translate-x-full
        before:animate-[shimmer_1.8s_infinite]
        before:bg-gradient-to-r
        before:from-transparent
        before:via-white/60
        before:to-transparent
        ${className}
      `}
    />
  );
};

export default Skeleton;