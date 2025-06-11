const {MongoClient} = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run () {
  try{
    await client.connect();
    const db = client.db("PLP_Bookstore");
    const books = db.collection("books");

    await books.insertMany([ {
    title: "Sunshine Girl",
    author: "Motris Tim",
    genre: "Romance",
    published_year: 2001,
    price: 22.50,
    in_stock: true,
    pages: 250,
    publisher: "Amazon Kindle"
  },
  {
    title: "Witcher",
    author: "Spencer Wood",
    genre: "Horror Fiction",
    published_year: 1998,
    price: 34.99,
    in_stock: true,
    pages: 300,
    publisher: "Davis Stan"
  },
  {
    title: "The Mind Hack",
    author: "Ella Grant",
    genre: "Science Fiction",
    published_year: 2015,
    price: 18.75,
    in_stock: true,
    pages: 280,
    publisher: "TechWorld Press"
  },
  {
    title: "Whispers in the Wind",
    author: "Laura Steel",
    genre: "Mystery",
    published_year: 2010,
    price: 27.00,
    in_stock: false,
    pages: 310,
    publisher: "Riverside Books"
  },
  {
    title: "Code & Chaos",
    author: "Daniel Cole",
    genre: "Thriller",
    published_year: 2020,
    price: 30.99,
    in_stock: true,
    pages: 350,
    publisher: "ByteHouse"
  },
  {
    title: "Ocean Depths",
    author: "Nina Marks",
    genre: "Adventure",
    published_year: 2008,
    price: 21.45,
    in_stock: false,
    pages: 260,
    publisher: "Wave Publications"
  },
  {
    title: "Broken Dreams",
    author: "Henry Doyle",
    genre: "Drama",
    published_year: 2012,
    price: 19.99,
    in_stock: true,
    pages: 275,
    publisher: "HeartLines Press"
  },
  {
    title: "Legends of Elvaria",
    author: "Kara Wells",
    genre: "Fantasy",
    published_year: 2016,
    price: 25.00,
    in_stock: true,
    pages: 420,
    publisher: "Mythic Reads"
  },
  {
    title: "Neon Nights",
    author: "Leo Barnes",
    genre: "Cyberpunk",
    published_year: 2023,
    price: 29.99,
    in_stock: true,
    pages: 295,
    publisher: "Digital Light Books"
  },
  {
    title: "The Last Voyage",
    author: "Isla Morgan",
    genre: "Historical Fiction",
    published_year: 1995,
    price: 17.89,
    in_stock: false,
    pages: 330,
    publisher: "Classic Tales Co."
  }]);


  console.log("Yipee!!! You have successfully inserted your books!");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
 
  
