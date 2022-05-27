import {useState} from 'react';
import './App.css';
import AddItem from './components/AddItem';
import Footer from './components/Footer';
import Header from './components/Header';
import WelcomeNote from './components/WelcomeNote';
import Table from './components/Table';
import Button from './components/Button';
import {Item} from "./types/Items"

function loadItems(): Item[] {
  // fetch from localStorage
  const result = localStorage.getItem("Expenses");
  // check if localStorage returns null
  if (result == null) return []
  // change string to an array using JSON.parse
  return JSON.parse(result)
}

function App() {

  const [items, setItems] = useState<Item[]>(loadItems());
  const [product, setProduct] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [totalIncome, setTotalIncome] = useState<number>(0);


  // function to add an item to array of items
  const addItem = (product: string, price: number): void => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const mynewItem = { id, product, price }
    const listItems = [...items, mynewItem];
    localStorage.setItem("Expenses", JSON.stringify(listItems))
    setItems(listItems)
  }
 
  // add item to array of items
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!product) {
      alert('Please add a Product')
      return
    }

    addItem(product, price);
    setPrice(0);
    setProduct('');
  }

  // function to get total price of all items
  const sumTotal = (items: Item[]): void => {

    const totalPrice = items.reduce((total, item) => {
      return total + item.price
    }, 0)

    console.log(totalPrice)
    setTotalIncome(totalPrice)
  }


  // delete each item
  const handleDelete = (id: number) => {
    const remainingItems = items.filter((item) => item.id !== id)
    localStorage.setItem("Expenses", JSON.stringify(remainingItems))
    setItems(remainingItems);
    sumTotal(remainingItems)
  }

  return (
    <main className="App">
      <Header />
      <section className="section">
        <div className="container">
          <WelcomeNote />
          <AddItem
            price={price}
            setPrice={setPrice}
            handleSubmit={handleSubmit}
            product={product}
            setProduct={setProduct}
          />
          <Table 
            items={items}
            handleDelete={handleDelete}
          />
          <Button 
            totalIncome={totalIncome}
            sumTotal={sumTotal}
            items={items}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
