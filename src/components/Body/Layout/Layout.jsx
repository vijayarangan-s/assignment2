/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { filterOptions, categ } from "../../../utils/data";
import { Tag } from 'primereact/tag';
import "./Layout.css";

const CollapseContainer = (props) => {
  const { title, option } = props || {};
  const [isOpen, setIsOpen] = useState(true);
  const [ingredients, setIngredients] = useState([]);

  const onIngredientsChange = (e) => {
    let _ingredients = [...ingredients];

    if (e.checked) _ingredients.push(e.value);
    else _ingredients.splice(_ingredients.indexOf(e.value), 1);

    setIngredients(_ingredients);
  };
  return (
    <div className="collapse-container">
      <div className="title">
        <div>{title}</div>
        <span
          className={`pi pi-angle-${isOpen ? `up` : `down`}`}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <>
          {title !== "color" &&
            option?.map((v, i) => {
              return (
                <div key={i} className="flex align-items-center">
                  <Checkbox
                    inputId={v?.name}
                    name={v?.name}
                    value={v?.name}
                    onChange={onIngredientsChange}
                    checked={ingredients.includes(v?.name)}
                    style={{ marginRight: "10px" }}
                  />
                  <label htmlFor="ingredient1" className="ml-2">
                    {v?.name} ({v?.available})
                  </label>
                </div>
              );
            })}
          {title === "color" && (
            <div className="colors">
              {option?.map((v, i) => {
                return (
                  <div
                    key={i}
                    className="color-container"
                    style={{ "--color": v }}
                  />
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
};

const Layout = () => {
  return (
    <div className="layout-container">
      <div className="layout-leftside">
        <div className="d-flex justify-content-between px-2">
          <div>Filters</div>
          <div>Clear All</div>
        </div>
        {Object.keys(filterOptions)?.map((v, i) => {
          return (
            <CollapseContainer key={i} title={v} option={filterOptions?.[v]} />
          );
        })}
      </div>
      <div className="layout-rightside">
        <div className="right-title d-flex justify-content-between px-2">
          <div>T-Shirts for Men 2139 Products</div>
          <div>Sort by: New Arrivals</div>
        </div>
        <div className="card-container">
          {categ?.map((v, i) => {
            return (
              <div key={i} className="border-1">
                <div className="mb-3">
                  <img
                    src={v.img}
                    alt={v.name}
                    style={{ width: "300px", height: "400px" }}
                    className="w-6 shadow-2"
                  />
                </div>
                <div>
                  <h4 className="mb-1">{v.title}</h4>
                  <p className="mb-1">Product name and style</p>
                  <div className="mb-1 d-flex">
                    <b className="mx-1">₹1399</b>
                    <p> MRP: ₹1399 <span style={{color: "green"}}>(Save 50%)</span></p>
                  </div>
                  <Tag value={`₹1399 For TriBe Members`} severity={`warn`}></Tag>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Layout;
