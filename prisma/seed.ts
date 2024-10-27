import { connectDb, prisma } from "../src/database";

async function main() {
    connectDb()
  const starSystem = await prisma.starSystem.create({
    data: {
      name: 'Milky Way',
      description: 'A spiral galaxy containing our Solar System.',
    },
  });
  const tatooine = await prisma.planet.create({
    data: {
      name: 'Tatooine',
      climate: 'arid',
      terrain: 'desert',
      starSystemId: starSystem.id,
    },
  });

  const naboo = await prisma.planet.create({
    data: {
      name: 'Naboo',
      climate: 'temperate',
      terrain: 'swamp, plains, forests',
      starSystemId: starSystem.id,
    },
  });
  await prisma.character.createMany({
    data: [
      {
        name: 'Luke Skywalker',
        species: 'Human',
        affiliation: 'Rebel Alliance',
        homePlanetId: tatooine.id,
      },
      {
        name: 'Padmé Amidala',
        species: 'Human',
        affiliation: 'Galactic Republic',
        homePlanetId: naboo.id,
      },
    ],
  });
  await prisma.spaceship.createMany({
    data: [
      {
        name: 'Millennium Falcon',
        model: 'YT-1300 light freighter',
        manufacturer: 'Corellian Engineering Corporation',
        passengerCapacity: 6,
      },
      {
        name: 'X-Wing',
        model: 'T-65 X-wing starfighter',
        manufacturer: 'Incom Corporation',
        passengerCapacity: 1,
      },
    ],
  });

  console.log('Seed data created successfully.');
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });