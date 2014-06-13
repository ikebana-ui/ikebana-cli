var lazyRequire = function (id) {
    return require(id).apply(undefined);
};

module.exports = {
    init: lazyRequire('./init')
};
