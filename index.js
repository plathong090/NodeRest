const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();

//
const db = new sqlite3.Database('./Database/Book.sqlite');

//
app.use(express.json());

//
db.run(`CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY,
    title TEXT, 
    author TEXT
)`);

//
app.get('/book/:id', (rep, res) => {
    db.get('SELECT * FROM books', rep.params.id, (err, row) => {
        if (err){
            res.status(500).send(err);
        }else{
            res.json(row);
        }
    });
});

//
app.get('/book/:id', (rep, res) => {
    db.get('SELECT * FROM books WHERE id = ?', rep.params.id, (err, row) => {
        if (err){
            res.status(500).send(err);
        }else{
            if (!row){
                res.status(404).send('Book not found');
            }else{
                res.json(row);
            }
        }
    });
});

//
app.post('/books', (rep, res) => {
    const book = rep.body;
    db.run('INSERT INTO books (title, (author) VALUES (?, ?)', book.title, book.author, function(err){
        if (err){
            res.status(500).send(err);
        }else{
            book.id = this.lastID;
            res.json(book);
        }
    });
});

//
app.put('/books/:id', (rep, res) => {
    const book = rep.body;
    db.run('UPdATE books SET title = ?, author = ? WHERE id = ?', book.title, book.author, function(err){
        if (err){
            res.status(500).send(err);
        }else{
            res.json(book);
        }
    });
});

//
app.delete('/books/:id', (rep, res) => {
    db.run('DELETE FROM books WHERE id = ?', rep.params.id, function(err){
        if (err){
            res.status(500).send(err);
        }else{
            res.send({});
        }
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
  });
  