import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

// SSL / TLS verification bypass karne ke liye taaki handshake error na aaye
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const app = express();
const PORT = process.env.PORT || 4000; 

mongoose.connect(process.env.MONGO_URI, {
  family: 4, // Forces IPv4
  tls: true,
  tlsAllowInvalidCertificates: true,
  tlsAllowInvalidHostnames: true
})
  .then(() => console.log('Connected to MongoDB Atlas Successfully!'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});