const { db } = require('@vercel/postgres');
const { shirts } = require('../app/lib/placeholder-data.js');

async function seedShirts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "shirts" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS shirts (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        name VARCHAR(255) NOT NULL,
        price NUMERIC(10, 2) NOT NULL,
        sizes TEXT[] NOT NULL,
        colors TEXT[] NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "shirts" table`);

    // Insert data into the "shirts" table
    const insertedShirts = await Promise.all(
      shirts.map(async (shirt) => {
        return client.sql`
          INSERT INTO shirts (id, name, price, sizes, colors, image_url)
          VALUES (${shirt.id}, ${shirt.name}, ${shirt.price}, ${shirt.sizes}, ${shirt.colors}, ${shirt.image_url})
          ON CONFLICT (id) DO NOTHING;
        `;
      }),
    );

    console.log(`Seeded ${insertedShirts.length} shirts`);

    return {
      createTable,
      shirts: insertedShirts,
    };
  } catch (error) {
    console.error('Error seeding shirts:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedShirts(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
