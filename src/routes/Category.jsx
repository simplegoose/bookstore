import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categorySlice';

export default function Category() {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <main className="category-main">
      { !Array.isArray(categories) && <div className="text-center">{categories}</div> }
      <button className="category-button" type="button" onClick={() => dispatch(checkStatus('Under construction'))}>Check Status</button>
    </main>
  );
}
