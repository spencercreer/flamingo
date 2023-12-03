import mongoose, { ConnectOptions } from "mongoose";

const url = "mongodb://localhost:27017";

mongoose
  .connect(url, { useNewUrlParser: true } as ConnectOptions)
  .catch((err: any) => {
    throw err;
  });

export default mongoose.connection;
