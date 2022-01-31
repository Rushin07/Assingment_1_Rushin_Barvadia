exports.user = function (req, res, next) {
    res.render('user', {
        title: 'Users',
        name: 'Student'
    });
}

exports.rushin = function (req, res, next) {
    res.render('user', {
        title: 'User',
        name: 'Rushin'
    });
}