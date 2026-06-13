import User from "../models/User.js";
import ApiError from "../utils/ApiError.js";
import generateToken from "../utils/generateToken.js";

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email }).select(
    "+password"
  );

  if (!user) {
    throw new ApiError(401, "Invalid email or password");
  }

  const isPasswordCorrect =
    await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new ApiError(401, "Invalid email or password");
  }

  const token = generateToken({
    _id: user._id,
    role: user.role,
  });

  return {
    token,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
};

export const createUser = async (payload) => {
  const exists = await User.findOne({
    email: payload.email,
  });

  if (exists) {
    throw new ApiError(
      400,
      "User already exists with this email"
    );
  }

  const user = await User.create(payload);

  return user;
};