Package.describe({
    summary: "Mongodb aggregation supports for meteor"
});
// meteor test-packages ./
Package.on_use(function (api) {
    api.use('mongo-livedata', ['server']);
    api.add_files([
        'src/index.js'
    ], ['server']);
    if (typeof api.export !== 'undefined') {
        api.export('aggregates', ['server']);
    }
});
