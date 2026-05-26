import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

export const BlogSkeleton = () => {
    return (
        <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm h-full">
                    <Skeleton className="h-52 w-full" />
                    <div className="p-6 space-y-4">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-8 w-3/4" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-2/3" />
                        </div>
                        <div className="pt-4 flex justify-between items-center">
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-4 w-16" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogSkeleton;
