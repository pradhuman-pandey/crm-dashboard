import Card from "../../ui/Card/Card";
import Skeleton from "../../ui/Skeleton";

const StatsSectionSkeleton =
  () => {
    return (
      <div
        className="
          grid
          grid-cols-1
          gap-5
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        {Array.from({
          length: 4,
        }).map((_, index) => (
          <Card
            key={index}
            className="p-5"
          >

            <div
              className="
                flex
                items-start
                justify-between
              "
            >
              <div className="space-y-3">

                <Skeleton className="h-4 w-24" />

                <Skeleton className="h-8 w-32" />
              </div>

              <Skeleton
                className="
                  h-12
                  w-12
                  rounded-2xl
                "
              />
            </div>

            <div
              className="
                mt-5
                flex
                items-center
                gap-2
              "
            >
              <Skeleton
                className="
                  h-5
                  w-16
                  rounded-full
                "
              />
              <Skeleton className="h-4 w-24" />
            </div>
          </Card>
        ))}
      </div>
    );
  };

export default StatsSectionSkeleton;