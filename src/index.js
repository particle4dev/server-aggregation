aggregates = (function () {
    var mongoDriver = MongoInternals.defaultRemoteCollectionDriver().mongo;
    return function (collectionName, pipeline) {
        var future = new Future();
        var collection = mongoDriver._getCollection(collectionName);

        collection.aggregate(pipeline, function (err, docs) {
            if (err) {
                future.
                throw (err);
                return;
            } else {
                future.
                return (docs);
            }
        });
        return future.wait();
    }
})();