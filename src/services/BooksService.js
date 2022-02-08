export default class BooksService {
  static data = [
    {
      id: 1,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg'
    },
    {
      id: 2,
      title: 'Code Complete',
      author: 'Robert C. Martin',
      price: 25,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41nvEPEagML._SX408_BO1,204,203,200_.jpg'
    },
    {
      id: 3,
      title: 'Design Patterns',
      author: 'Robert C. Martin',
      price: 24,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51szD9HC9pL._SX395_BO1,204,203,200_.jpg'
    },
    {
      id: 4,
      title: 'Refactoring: Improving the Design of Existing Code (2nd Edition)',
      author: 'Martin Fowler',
      price: 50,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41trAWIzKAL._SX401_BO1,204,203,200_.jpg'
    },
    {
      id: 5,
      title: 'The Pragmatic Programmer',
      author: 'David Thomas, Andrew Hunt',
      price: 30,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51dxkfagmwL._SX380_BO1,204,203,200_.jpg'
    },
    {
      id: 6,
      title: 'Introduction to Algorithms',
      author: 'Thomas H. Cormen',
      price: 64,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41T0iBxY8FL._SX440_BO1,204,203,200_.jpg'
    }, {
      id: 7,
      title: 'Working Effectively with Legacy Code',
      author: 'Michael Feathers',
      price: 36,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51yS8PYs03L._SX376_BO1,204,203,200_.jpg'
    },
    {
      id: 8,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 45,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
    },
    {
      id: 9,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
    },
  ];

  static getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.data), 700);
    });
  }
}

