const mongoose = require("mongoose");

const AttestationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  cnic: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  stamp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Attestation ||
  mongoose.model("Attestation", AttestationSchema);
