const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017"; 
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("PLP_Bookstore");
    const books = db.collection("books");

    // 1. Find all books
    const allBooks = await books.find({}).toArray();
    console.log("\n1. All books:");
    console.log(allBooks);

    // 2. Find books by author "Ella Grant"
    const booksByAuthor = await books.find({ author: "Ella Grant" }).toArray();
    console.log("\n2. Books by Ella Grant:");
    console.log(booksByAuthor);

    // 3. Find books published after 2000
    const booksAfter2000 = await books.find({ published_year: { $gt: 2000 } }).toArray();
    console.log("\n3. Books published after 2000:");
    console.log(booksAfter2000);

    // 4. Find all books in stock
    const booksInStock = await books.find({ in_stock: true }).toArray();
    console.log("\n4. Books in stock:");
    console.log(booksInStock);

    // 5. Update price of "Ocean Depths"
    const updateResult = await books.updateOne(
      { title: "Ocean Depths" },
      { $set: { price: 95.99 } }
    );
    console.log(`\n5. Updated Ocean Depths price: Matched ${updateResult.matchedCount}, Modified ${updateResult.modifiedCount}`);

    // 6. Delete book titled "Neon Nights"
    const deleteResult = await books.deleteOne({ title: "Neon Nights" });
    console.log(`\n6. Deleted Beloved: Deleted Count ${deleteResult.deletedCount}`);

    // 7. Find books with more than 300 pages
    const booksOver300Pages = await books.find({ pages: { $gt: 300 } }).toArray();
    console.log("\n7. Books with more than 300 pages:");
    console.log(booksOver300Pages);

    // 8. Sort books by price ascending
    const booksSortedAsc = await books.find().sort({ price: 1 }).toArray();
    console.log("\n8. Books sorted by price ascending:");
    console.log(booksSortedAsc);

    // 9. Limit results to 3 books
    const limitedBooks = await books.find().limit(3).toArray();
    console.log("\n9. Limit to 3 books:");
    console.log(limitedBooks);

    // 10. Find books in genre "Adventure"
    const adventureBooks = await books.find({ genre: "Adventure" }).toArray();
    console.log("\n10. Adventure genre books:");
    console.log(adventureBooks);

  } catch (error) {
    console.error("Error running queries:", error);
  } finally {
    await client.close();
  }
}

run();