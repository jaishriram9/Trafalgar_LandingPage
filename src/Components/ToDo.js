import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function ToDo() {
  const [value, setValue] = useState("");
  const [todoArr, setTodoArr] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const[editItem,setEditItem] = useState('');

  const handleEdit = () => {
    setIsEdit(true);
    const editindex = todoArr.indexOf(editItem);
    const temp  =  todoArr.map((it,index)=> index == editindex ? it=value:it)
    setIsEdit(false);
    setTodoArr(temp);
    setValue('');
    setEditItem();
  };

  const handleAdd = () => {
    setTodoArr([...todoArr, value]);
    setValue("");
  };


  const handleDelete = (item) => {
    const temp = todoArr.filter((prod, index) => prod !== item);
    setTodoArr(temp);
  };

  return (
    <>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        {!isEdit ? (
          <button type="submit" onClick={() => handleAdd()}>
            Add
          </button>
        ) : (
          <div onClick={() => handleEdit()}>
            <FaRegEdit />
          </div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {todoArr.length > 0 &&
          todoArr.map((item, index) => {
            return (
              <div
                key={index}
                style={{ display: "flex", flexDirection: "row", width: "50%" }}
              >
                {/* <input
                  value={item}
                  onChange={(e) => setValue(e.target.value)}
                  style={{ color: "black" }}
                ></input> */}
                <h6 style={{ color: "black" }}>{item}</h6>
                <div onClick={() => {setEditItem(item);setIsEdit(true); setValue(item)}}>
                  <FaRegEdit />
                </div>
                <div onClick={() => handleDelete(item)}>
                  <MdDelete />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default ToDo;
