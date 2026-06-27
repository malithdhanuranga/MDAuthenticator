const { Client } = require('pg');

// Read the database URL from the .env file if available, or just hardcode it here for the test.
require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:p0stgr3ss0f321@localhost:5432/MDAuthdatabase',
});

async function testConnection() {
  try {
    console.log('Attempting to connect to the database...');
    await client.connect();
    
    console.log('Connection successful! Executing a test query...');
    const res = await client.query('SELECT NOW()');
    
    console.log('Database connected successfully. Current time from DB:', res.rows[0].now);
  } catch (err) {
    console.error('Failed to connect to the database. Error details:', err.message);
  } finally {
    await client.end();
  }
}

testConnection();
