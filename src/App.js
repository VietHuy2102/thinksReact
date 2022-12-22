import { useState } from "react";
import Category from "./component/Filtering/CategorySelect/index";
import InStockChecked from "./component/Filtering/InStockChecked";
import SearchInput from "./component/Filtering/SearchInput";
import Product from "./component/Product";


export const products = [
  {
    "id": 1,
    "name": "Football",
    "category": "Sporting goods",
    "price": 2,
    "stocked": true
  },
  {
    "id": 2,
    "name": "Baseball",
    "category": "Sporting goods",
    "price": 3,
    "stocked": false
  },
  {
    "id": 3,
    "name": "Baseball game",
    "category": "Electronics",
    "price": 30,
    "stocked": true
  },
  {
      "id": 4,
      "name": "React book",
      "category": "Books",
      "price": 20,
      "stocked": true
    }
]

const categories = ["Sporting goods", "Electronics", "Books"]

function App() {
  const [query, setQuery] = useState('')
  const [selectedCategories, setSelectedCategories]= useState([])
  console.log(selectedCategories);
  const [inStockChecked, setInStockChecked] = useState(false)

  const showProduct = products
  .filter((productItem)=>productItem.name.toLowerCase().includes(query.toLowerCase())) //lọc tất cả các productItem có name chứa query
  .filter((productItem)=>selectedCategories.includes(productItem.category) || selectedCategories.length===0)
  // Lọc tất cả các productItem có category được chứa trong selectedCategories hoặc danh sách selectedCategories =0
  .filter((productItem)=>inStockChecked ? productItem.stocked:true) // lọc tất cả các producItem khi chọn inStockChecked

  return (
    <div >
      <SearchInput value={query} onChange={setQuery} />
      <InStockChecked checked={inStockChecked} onClick={()=>setInStockChecked(!inStockChecked)} />
      <Category categories={categories} onClick={setSelectedCategories} selectedCategories={selectedCategories} />
      <Product products={showProduct} />
    </div>
  );
}

export default App;
