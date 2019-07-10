
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

exports.remove = (title) => {
    var len = books.length;    
    books = books.filter((item) => {
        return item.title !== title;
    });
    var action = (books.length == len) ? "" : "deleted";
    return { "title": title, "action": action, "Total books now in collection": books.length };
}

