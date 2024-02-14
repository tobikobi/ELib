package com.shreyas.ecom1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;
import java.util.Optional;

@Service
public class BooksService {

    @Autowired
    private BooksRepository booksRepository;

    public List<Books> allBooks(){
        return booksRepository.findAll();
    }
    public Books saveDetails(Books book){
        return booksRepository.save(book);
    }
    @Transactional

    public Optional<Books> singleBook(int bookId){
        return booksRepository.findById(bookId);
    }
}
