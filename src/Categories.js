import React from 'react';
import items from './data';

const Categories = ({filterItems}) => {
 

  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }

  let list = [];

  items.forEach(element => {
    list.push(element.category);
  });

  console.log((list));

  let unique = list.filter(onlyUnique);



  return (
    <div className="buttons">
      <button className='filter-btn' onClick={() => filterItems("all")}>
        All
      </button>
        { unique.map(item => (<button className="filter-btn"onClick={() => filterItems(item)}>{item}

        </button>)) }
    </div>
  );
};

export default Categories;
