import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';

export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) return next(errorHandler(401, 'You can only update your account'));
    try {
        if (req.body.password) {
            req.body.password = bcrypt.hashSync(req.body.password, 10);
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }
        }, { new: true });

        const { password, ...info } = updatedUser._doc;
        res.status(200).json(info);
    } catch (error) {
        next(error);
    }
}