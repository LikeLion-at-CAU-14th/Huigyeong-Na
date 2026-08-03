import {Link, Outlet, useNavigate} from 'react-router-dom';
import BookDetailDom from './BookDetail';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = () => {
      const [books, setBooks] = useState([]);
      const navigate = useNavigate();

      const goHome = () => {
        navigate("/")
      }

      useEffect(() => {
        const fetchBooks = async() => {
          const response = await axios.get("/databases/book.json");
          setBooks(response.data);
        }
        fetchBooks();
      }, [])

    return(
        <div className="flex justify-start items-center gap-[20px] w-full h-[80vh] m-[20px]">
            <div className="flex flex-col justify-start bg-white p-[50px] h-[80%] rounded-[0_10px_10px_0] shadow-[2px_2px_5px_rgba(0,0,0,0.1)]">
              <div className="text-[40px] text-[#535353] font-[700]" onClick={goHome}>Home</div>
              <div className="text-[40px] text-[#535353] font-[700]">Book List</div>
              <ul>
                {books.map((book) => (
                  <Link key={book.id} to ={`/books/${book.id}`}>
                    <li>{book.title}</li>
                  </Link>
                ))}
              </ul>
            </div>
            <BookDetailDom>
              <Outlet />
            </BookDetailDom>
        </div>
    )
}

export default BookList;