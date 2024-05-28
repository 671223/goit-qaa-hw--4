// słowo kluczowe this służy do odwołania się do istniejącego obiektu
// dla przykładu mając klasę czyli tzw. blueprint
var version = 0
class Person{
    constructor(Username, Name, Surname){
        //można odwołać się do obiektu przy uzyciu słowa this
        this.Username = Username
        this.Name = Name
        this.Surname = Surname
        this.version=1
        //tutaj odwołujemy się do zmienej globalnej ponieważ nie używamy słowa this
        version+=1
    }

    showName(){
        //w tym użyciu wykorzystujemy dany obiekt aby otrzymać jego właściwość
        console.log("Username: "+this.Username)
    }

    addVersion(){
        this.version+=1
        //wyświetlamy wersje daną obiektowi
        console.log("Object version: "+this.version)
        //wyświetlamy globalna zmienna
        console.log("Global version: "+version)
    }
}

var person1 = new Person("Janek123","Jan","Kowalski")
person1.showName()
person1.addVersion()
var person2 = new Person("Janek1234","Jan","Kowalski")
person2.showName()
person2.addVersion()
var person3 = new Person("Janek12345","Jan","Kowalski")
person3.showName()
person3.addVersion()
var person4 = new Person("Janek1234567","Jan","Kowalski")
person4.showName()
person4.addVersion()

person1.addVersion()
person2.addVersion()

/////////////////////////////////////////////////////////

class BookShelf{
    constructor(){
        this.Authors = []
    }

    addAuthor(author){
        this.Authors.push(author)
    }

    show(){
        this.Authors.forEach((author) => {
            console.log("Autor o nazwisku: "+author.Name)
            console.log("Napisał następujące książki:")
            author.Books.forEach((book) => {
                console.log("   * "+book)
              });
            console.log()
          });
    }
}

class Author{
    constructor(Name){
        this.Books = []
        this.Name=Name
    }

    addBook(BookName){
        this.Books.push(BookName)
    }
}

function addBooksToAuthor(author, booksList){
    booksList.forEach((book) => {
        author.addBook(book)
      });
}


var author = new Author("Mickiewicz")

var mickiewiczBooks = ["Pan Tadeusz","Dziady","Konrad Wallenrod"]

addBooksToAuthor(author, mickiewiczBooks)

var author2 = new Author("Słowacki")

var mickiewiczBooks2 = ["Balladyna","Hymn","Anhelli"]

addBooksToAuthor(author2, mickiewiczBooks2)

var bookShelf = new BookShelf()
bookShelf.addAuthor(author)
bookShelf.addAuthor(author2)

bookShelf.show();