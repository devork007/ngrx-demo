export interface BookModel {
  bookId?: number;
  title: string;
  author: string;
  description?: string;
  price: number;
  quantity: number;
}

export interface BookState {
  bookList: BookModel[];
  totalAmount: number;
  totalBooks: number;
  activeBookId?: number | null;
  isLoading: boolean;
  error: string | null;
}

export const initialBookState: BookState = {
  bookList: [],
  totalAmount: 0,
  totalBooks: 0,
  activeBookId: null,
  isLoading: false,
  error: '',
};

// // NPM
// npm install @ngrx/store --save

// // Yarn
// yarn add @ngrx/store

// // Angular CLI
// ng add @ngrx/store@latest
