import React, {useState} from 'react'
// import './App.css';
import About from './components/About'
import Nav from './components/Nav'
import Gallery from './components/Gallery';
// import SomeComponent from './components/Timer';
// import ClickCounter from './components/Timer';

function App() {
  // const [categories] = useState([
  //   {
  //     name: "commercial",
  //     description:
  //       "Photos of grocery stores, food trucks, and other commercial projects",
  //   },
  //   { name: "portraits", description: "Portraits of people in my life" },
  //   { name: "food", description: "Delicious delicacies" },
  //   {
  //     name: "landscape",
  //     description: "Fields, farmhouses, waterfalls, and the beauty of nature",
  //   },
  // ])

  const categories = [
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]

  const i = 0
  const [currentCategory, setCurrentCategory] = useState(categories[i])
  
  return (
    <div>
      <Nav 
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        {/* <SomeComponent></SomeComponent> */}
        {/* <ClickCounter></ClickCounter> */}
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
      </main>
    </div>

  );
}

export default App;
