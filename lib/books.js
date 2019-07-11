
let books = [
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", pubdate: "1925"},
    {title: "Ulysses", author: "James Joyce", pubdate: "1918"},
    {title: "Moby Dick", author: "Herman Melville", pubdate: "1851"},
    {title: "War and Peace", author: "Leo Tolstoy", pubdate: "1869"},
    {title: "Great Expectations", author: "Charles Dickens", pubdate: "1860"}
];


exports.get = (title) => {
    return books.find((item) => {
        return item.title == title;
    });
}

exports.all = () => {
    return books;
}

exports.remove = (title) => {
    var len = books.length;    
    books = books.filter((item) => {
        return item.title !== title;
    });

    return { "deleted": (books.length !== len), "total": books.length };
}

exports.add = (newBook) => {
    var len = books.length;
    
    if(!(this.get(newBook.title))){
       books.push(newBook); 
    }
    
    return { "added": (books.length !== len), "total": books.length };
}
