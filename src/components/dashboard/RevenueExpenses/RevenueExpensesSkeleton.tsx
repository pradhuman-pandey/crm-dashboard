import Card from "../../ui/Card/Card";
import Skeleton from "../../ui/Skeleton";

const RevenueExpensesSkeleton =
  () => {
    return (
      <Card className="p-5">

        <div
          className="
            mb-5
            grid
            grid-cols-1
            gap-4
            md:grid-cols-2
          "
        >
          {Array.from({
            length: 2,
          }).map((_, index) => (
            <Card key={index}>
              <div className="space-y-4">
                <Skeleton className="h-4 w-24" />

                <Skeleton className="h-8 w-32" />

                <Skeleton className="h-5 w-20" />
              </div>
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <div className="space-y-2">
              <Skeleton className="h-5 w-40" />

              <Skeleton className="h-4 w-24" />
            </div>

            <Skeleton className="h-8 w-28" />
          </div>

          <Skeleton className="h-[260px] w-full rounded-2xl" />
        </div>
      </Card>
    );
  };

export default RevenueExpensesSkeleton;