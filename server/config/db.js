import { MongoClient } from 'mongodb';

// Load environment variables
import dotenv from 'dotenv';
dotenv.config();

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true,
  minTLSVersion: 'TLS1.2',
});

export const connectDB = async () => {
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
};

export default client;
