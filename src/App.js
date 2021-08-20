import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MainNote from './MainNote';
import Note from './Note';

function App() {
  const [item, setItem] = useState([]);

  const deleteNote = (id) => {
    setItem((previousValue) => {
      return previousValue.filter((currentValue, index) => {
        return index !== id;
      });
    });
    console.log(item);
  }

  const passNote = (data) => {
    setItem((preValue) => {
      return [
        ...preValue,
        data,
      ];
    });
  };
  return (
    <>
      <Header />
      <MainNote passNote={passNote} />
      <div className="outerDiv">
        {item.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteNote={deleteNote}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
