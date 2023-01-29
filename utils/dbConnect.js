const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    //supress deprecation warnings
    mongoose.set("strictQuery", false);
    const connected = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected ${connected.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDb;
