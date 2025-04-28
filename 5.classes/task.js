class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;                     
      this.releaseDate = releaseDate;      
      this.pagesCount = pagesCount;         
      this._state = 100;                    
      this.type = null;                    
    }
  
    set state(newState) {
      if (newState < 0) {
        this._state = 0;
      } else if (newState > 100) {
        this._state = 100;
      } else {
        this._state = newState;
      }
    }
  
    get state() {
      return this._state;
    }
  
    
    fix() {
      this.state = this.state * 1.5;
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  
 
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }
  
  class Library {
    constructor(name) {
      this.name = name;      
      this.books = [];      
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(prop, value) {
      for (const book of this.books) {
        if (book[prop] === value) {
          return book;
        }
      }
      return null;
    }
  
    giveBookByName(bookName) {
      const index = this.books.findIndex(book => book.name === bookName);
      if (index !== -1) {
        return this.books.splice(index, 1)[0];
      }
      return null;
    }
  }
  
  const library = new Library("Библиотека имени Ленина");
  
  library.addBook(new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  ));
  library.addBook(new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  ));
  library.addBook(new NovelBook(
    "Герберт Уэллс",
    "Машина времени",
    1895,
    138
  ));
  library.addBook(new Magazine(
    "Мурзилка",
    1924,
    60
  ));
  
  let book1 = library.findBookBy("releaseDate", 1919);
  if (!book1) {
    book1 = new NovelBook(
      "Фёдор Сологуб",
      "Мелкий бес",  
      1919,
      256
    );
    library.addBook(book1);
    console.log(`Создана и добавлена книга: "${book1.name}", ${book1.releaseDate} год`);
  } else {
    console.log(`Найдена книга 1919 года: "${book1.name}"`);
  }
  
  const issued = library.giveBookByName("Машина времени");
  console.log(`Выдана книга: "${issued.name}"`);
  console.log("Осталось в библиотеке:", library.books.length);
  
  issued.state = 25;
  console.log(`Состояние после повреждения: ${issued.state}`);
  
  issued.fix();
  console.log(`Состояние после починки: ${issued.state}`);
  
  library.addBook(issued);
  console.log("После возврата и добавления обратно в библиотеку — всего книг:", library.books.length);

  class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }

    addMark(mark, subject) {
      if (mark < 2 || mark > 5) {
        console.warn(`Оценка ${mark} вне диапазона 2–5 и не будет добавлена.`);
        return;
      }
      
      if (!this.marks[subject]) {
        this.marks[subject] = [];
      }
      this.marks[subject].push(mark);
    }
  
    getAverageBySubject(subject) {
      const grades = this.marks[subject];
      if (!grades || grades.length === 0) {
        return 0;
      }
      const sum = grades.reduce((acc, m) => acc + m, 0);
      return sum / grades.length;
    }
  
    getAverage() {
      const subjects = Object.keys(this.marks);
      if (subjects.length === 0) {
        return 0;
      }
     
      const total = subjects.reduce((acc, subj) => {
        return acc + this.getAverageBySubject(subj);
      }, 0);
      return total / subjects.length;
    }
  }
  

  