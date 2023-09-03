package com.booksmanagement.repository;
import org.springframework.data.repository.CrudRepository;

import com.booksmanagement.model.Books;
public interface BooksRepository extends CrudRepository<Books, Integer>
{
}
