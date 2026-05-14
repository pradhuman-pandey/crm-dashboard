import Card from "../../ui/Card/Card";
import Skeleton from "../../ui/Skeleton";

const SalesDealsSkeleton = () => {
  return (
    <Card className="p-5">
      {/* HEADER */}

      <div
        className="
          mb-6
          flex
          flex-col
          gap-4
          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        <div className="space-y-2">
          <Skeleton className="h-6 w-40" />

          <Skeleton className="h-4 w-52" />
        </div>

        <Skeleton
          className="
            h-10
            w-full
            rounded-xl
            md:w-[320px]
          "
        />
      </div>
      <div
        className="
          overflow-hidden
          rounded-2xl
          border
          border-gray-200
        "
      >

        <div
          className="
            grid
            grid-cols-6
            gap-4
            border-b
            border-gray-100
            bg-gray-50
            px-6
            py-4
          "
        >
          {Array.from({
            length: 6,
          }).map((_, index) => (
            <Skeleton
              key={index}
              className="h-4 w-20"
            />
          ))}
        </div>

        {Array.from({
          length: 5,
        }).map((_, index) => (
          <div
            key={index}
            className="
              grid
              grid-cols-6
              gap-4
              border-b
              border-gray-100
              px-6
              py-5
              last:border-none
            "
          >
            <Skeleton className="h-4 w-20" />

            <Skeleton className="h-4 w-28" />

            <Skeleton className="h-4 w-36" />

            <Skeleton className="h-4 w-28" />

            <Skeleton className="h-4 w-20" />

            <Skeleton className="h-4 w-24" />
          </div>
        ))}
      </div>

      <div
        className="
          mt-5
          flex
          items-center
          justify-between
        "
      >
        <Skeleton className="h-4 w-32" />

        <div className="flex gap-2">
          <Skeleton className="h-9 w-20 rounded-lg" />

          <Skeleton className="h-9 w-20 rounded-lg" />
        </div>
      </div>
    </Card>
  );
};

export default SalesDealsSkeleton;