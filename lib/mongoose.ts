import mongoose from "mongoose"

// Variable to track the connection status
let isConnected = false

export const connectToDB = async () => {
  // set strict query mode for mongoose to prevent unknown field queries.
  mongoose.set("strictQuery", true)

  if (!process.env.MONGODB_URL) return console.log("Missing MongoDB URL")

  // if the connection is already established, return without creating a new connection.
  if (isConnected) {
    console.log("MongoDB connection already established")
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL)

    isConnected = true // set the connection status to true
    console.log("MongoDB connected")
  } catch (error) {
    console.log(error)
  }
}
