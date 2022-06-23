import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [search, setSearch] = useState('');
  const deleteFood = (i) => {
    const newList = [...foodList];
    newList.splice(i, 1);
    setFoodList(newList);
  };
  return (
    <div className="App">
      {/* Display Add Food component here */}
      <AddFoodForm foodList={foodList} setFoodList={setFoodList} />

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}
      <Search search={search} setSearch={setSearch} />

      <Divider className="food-list">Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {foodList
          .filter((food) => {
            return food.name.includes(search);
          })
          .map((e, i) => {
            return <FoodBox food={e} key={i} deleteFood={deleteFood} i={i} />;
          })}
      </Row>
    </div>
  );
}

export default App;
