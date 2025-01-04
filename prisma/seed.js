import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // First, create categories
  const categories = [
    {
      name: "Electronics",
      description: "Latest electronic gadgets and accessories",
      image: "https://example.com/electronics.jpg",
    },
    {
      name: "Clothing",
      description: "Trendy fashion wear for all seasons",
      image: "https://example.com/clothing.jpg",
    },
    {
      name: "Home & Garden",
      description: "Everything you need for your home",
      image: "https://example.com/home.jpg",
    },
    {
      name: "Books",
      description: "Wide collection of books across genres",
      image: "https://example.com/books.jpg",
    }
  ];

  const createdCategories = [];
  
  // Create categories sequentially
  for (const category of categories) {
    const createdCategory = await prisma.category.create({
      data: category
    });
    createdCategories.push(createdCategory);
    console.log(`Created category: ${category.name}`);
  }

  // Sample products for each category
  const products = [
    // Electronics
    {
      name: "Wireless Earbuds",
      price: 129.99,
      rating: 4.5,
      image: "https://example.com/earbuds.jpg",
      description: "High-quality wireless earbuds with noise cancellation",
      details: {
        color: "White",
        batteryLife: "6 hours",
        warranty: "1 year",
        features: ["Noise cancellation", "Touch controls", "Water resistant"]
      },
      categoryId: createdCategories[0].id
    },
    {
      name: "Smart Watch",
      price: 199.99,
      rating: 4.3,
      image: "https://example.com/smartwatch.jpg",
      description: "Feature-rich smartwatch with health tracking",
      details: {
        color: "Black",
        displaySize: "1.4 inch",
        batteryLife: "5 days",
        features: ["Heart rate monitor", "GPS", "Sleep tracking"]
      },
      categoryId: createdCategories[0].id
    },
    // Clothing
    {
      name: "Denim Jacket",
      price: 79.99,
      rating: 4.7,
      image: "https://example.com/denim.jpg",
      description: "Classic denim jacket with modern styling",
      details: {
        material: "100% Cotton",
        sizes: ["S", "M", "L", "XL"],
        care: "Machine washable"
      },
      categoryId: createdCategories[1].id
    },
    {
      name: "Running Shoes",
      price: 89.99,
      rating: 4.6,
      image: "https://example.com/shoes.jpg",
      description: "Comfortable running shoes for daily use",
      details: {
        material: "Mesh and synthetic",
        sizes: ["7", "8", "9", "10", "11"],
        colors: ["Black", "White", "Gray"]
      },
      categoryId: createdCategories[1].id
    },
    // Home & Garden
    {
      name: "Coffee Maker",
      price: 149.99,
      rating: 4.8,
      image: "https://example.com/coffeemaker.jpg",
      description: "Programmable coffee maker with thermal carafe",
      details: {
        capacity: "12 cups",
        features: ["Programmable timer", "Auto shutoff", "Brew strength control"],
        warranty: "2 years"
      },
      categoryId: createdCategories[2].id
    },
    {
      name: "Garden Tools Set",
      price: 45.99,
      rating: 4.4,
      image: "https://example.com/gardentools.jpg",
      description: "Complete set of essential garden tools",
      details: {
        pieces: 8,
        material: "Stainless steel",
        includes: ["Trowel", "Pruner", "Rake", "Gloves"]
      },
      categoryId: createdCategories[2].id
    },
    // Books
    {
      name: "The Midnight Library",
      price: 24.99,
      rating: 4.9,
      image: "https://example.com/midnight-library.jpg",
      description: "Best-selling novel about life's infinite possibilities",
      details: {
        author: "Matt Haig",
        format: "Hardcover",
        pages: 304,
        genre: "Fiction"
      },
      categoryId: createdCategories[3].id
    },
    {
      name: "Cooking Basics",
      price: 34.99,
      rating: 4.7,
      image: "https://example.com/cooking-book.jpg",
      description: "Comprehensive guide for beginner cooks",
      details: {
        author: "Jane Smith",
        format: "Paperback",
        pages: 250,
        includes: ["Basic recipes", "Technique guides", "Meal plans"]
      },
      categoryId: createdCategories[3].id
    }
  ];

  // Create products sequentially
  for (const product of products) {
    await prisma.product.create({
      data: product
    });
    console.log(`Created product: ${product.name}`);
  }

  console.log('Database has been seeded with sample data!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });