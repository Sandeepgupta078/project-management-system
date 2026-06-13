import mongoose from "mongoose";

const activityLogSchema =
  new mongoose.Schema(
    {
      user: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
      },

      action: {
        type: String,
        required: true,
      },

      project: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Project",
      },

      details: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "ActivityLog",
  activityLogSchema
);