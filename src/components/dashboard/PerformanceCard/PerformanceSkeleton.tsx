import Card from "../../ui/Card/Card";
import Skeleton from "../../ui/Skeleton";

const PerformanceSkeleton = () => {
  return (
    <Card className="p-5">
      <div className="mb-6 space-y-2">
        <Skeleton className="h-5 w-36" />
        <Skeleton className="h-4 w-24" />
      </div>

      <div className="space-y-6">
        {Array.from({
          length: 3,
        }).map((_, index) => (
          <div
            key={index}
            className="
              border-b
              border-gray-100
              pb-5
              last:border-none
              last:pb-0
            "
          >

            <div
              className="
                mb-3
                flex
                items-center
                justify-between
              "
            >
              <div className="space-y-2">
                <Skeleton className="h-4 w-28" />

                <Skeleton className="h-3 w-20" />
              </div>

              <Skeleton className="h-6 w-16 rounded-full" />
            </div>

            <Skeleton className="h-3 w-full rounded-full" />

            <div className="mt-2 flex justify-end">
              <Skeleton className="h-3 w-20" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PerformanceSkeleton;