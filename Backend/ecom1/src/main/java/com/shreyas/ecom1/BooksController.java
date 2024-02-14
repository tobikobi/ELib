package com.shreyas.ecom1;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;



@RestController
//@CrossOrigin(origins="*")
@CrossOrigin("*")
@RequestMapping("/api/books")
public class BooksController {
    @Autowired
    private BooksRepository booksRepository;
    @Autowired
    private BooksService booksService;
    @CrossOrigin("*")
    @PostMapping(path="/add")
    public @ResponseBody Books addNewUser(@RequestBody Books book){

        return booksService.saveDetails(book);
    }
    @GetMapping
    public ResponseEntity<List<Books>> getAllBooks(){
        return new ResponseEntity<List<Books>>(booksService.allBooks(), HttpStatus.OK);
    }
    @GetMapping(path = "/{bookId}")
    public @ResponseBody Optional<Books> getSingleBook(@PathVariable int bookId){
        return booksService.singleBook(bookId);
    }
}
