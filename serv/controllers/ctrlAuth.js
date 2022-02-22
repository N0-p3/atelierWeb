const User = require('../schemas/user');

const login = async (req, res) => {
    res.cookie('session-info', true);
    res.sendStatus(204);
};

const register = async (req, res) => {
    try {
        const user = new User();
        user.username = req.body.username;
        user.setPassword(req.body.password);
        await User.create(user);

        res.sendStatus(204);
    } catch(e) {
        res.sendStatus(400);
    }
};

const logout = (req, res) => {
    res.cookie('session-info', false);
    req.logout();
    res.sendStatus(204);
}

module.exports = {
    login,
    logout,
    register,
};