import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "@/components/ui/card";

const SkeletonCard = () => {
  return (
    <div>
      <Card className="flex flex-col justify-between">
        <CardHeader className="flex flex-row gap-4 items-center">
          <Skeleton className="w-12 h-12 rounded-full" />
          <Skeleton className="h-6 flex-grow" />
        </CardHeader>

        <CardContent>
          <Skeleton className="h-4 flex-grow mt-4" />
          <Skeleton className="h-4 flex-grow mt-4" />
          <Skeleton className="h-4 w-1/2 mt-4" />
        </CardContent>

        <CardFooter>
          <Skeleton className="h-10 w-28" />
        </CardFooter>
      </Card>
    </div>
  );
};

export default SkeletonCard;
