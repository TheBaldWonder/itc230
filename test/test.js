var expect = require("chai").expect;
var book = require("../lib/books");

describe("Book module", () => {
 it("get returns requested book", function() {
   var result = book.get("Ulysses");
   expect(result).to.deep.equal({title: "Ulysses", author: "James Joyce", pubdate:"1918"});
 });
 
 it("get fails w/ invalid book", () => {
   var result = book.get("fake");
   expect(result).to.be.undefined;
 });
});


describe("Book module", () => {
 it("remove deletes requested book", function() {
   var result = book.remove("Ulysses");
   expect(result).to.be.true;
 });
 
 it("remove fails w/ invalid book", () => {
   var result = book.remove("fake");
expect(result.deleted).to.be.false;
 });
});


describe("Book module", () => {
 it("add adds entered book", function() {
     var result = book.add({title: "Adventures of Huckleberry Finn", author: "Mark Twain", pubdate: 1884});
     expect(result.added).to.be.true;
 });
 
 it("add fails w/ book already in collection", () => {
   var result = book.add({title: "Ulysses", author: "James Joyce", pubdate: 1918});
   console.log(result)
   expect(result.added).to.be.true;
 });
});