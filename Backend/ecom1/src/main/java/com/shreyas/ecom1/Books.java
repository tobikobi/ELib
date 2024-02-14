package com.shreyas.ecom1;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Table(name="books")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Books {
    @Id
//    @GeneratedValue(strategy= GenerationType.AUTO)
    private int bookId;
    private String bookName;
    private String bookPrice;

    public int getBookId() {
        return bookId;
    }

    public String getBookName() {
        return bookName;
    }

    public String getBookPrice() {
        return bookPrice;
    }

    public void setBookId(int bookId) {
        this.bookId = bookId;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public void setBookPrice(String bookPrice) {
        this.bookPrice = bookPrice;
    }
}
