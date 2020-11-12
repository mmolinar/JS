const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

  function books_rented (books) {
      books.forEach(book => {
          if (book.rented == 0){
              console.log("Un livre n'a pas ete emprunter");
              return ;
          }else{
              console.log("Tout les livres on ete emprunter");
          }
      });
  }

  function book_rented_max(books){
      let book_max = books[0];
      books.forEach(book => {
          if (book.rented > book_max.rented){
              book_max = book;
          }
      });
      console.log(book_max);
  }

  function book_rented_min(books){
      let book_min = books[0];
      books.forEach(book => {
          if (book.rented < book_min.rented){
              book_min = book;
          }
      });
      console.log(book_min);
  }

  function book_rented_index(books){
      let bookId =  books.filter(function(book) {
          return book.id === 873495;
        });
      console.log(bookId);
  }

  function book_shift(books){
      books.shift();
      console.log(books);
  }

  function book_sort(books){
      let sortLast = books.sort(function(a, b) {
          let nameA = a.title;
          let nameB = b.title;
          if (nameA < nameB) {
            return -1; //nameA comes first
          }
          if (nameA > nameB) {
            return 1; // nameB comes first
          }
          return 0;  // names must be equal
      });
      console.log(sortLast);
  }
  

  books_rented(books);
  book_rented_min(books);
  book_rented_max(books);
  book_rented_index(books);
  book_shift(books);
  book_sort(books);
  