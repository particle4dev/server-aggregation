I created this package and used it on my project. I'm sharing because maybe it's useful for someone. Cheers.

###How to Install
    mrt add server-aggregation
###Example
    aggregates(<collection name>, <pipeline>);
    aggregates('challenges', [
        {
            $group:{
                _id: "$userId"
            }
        }
    ]);
