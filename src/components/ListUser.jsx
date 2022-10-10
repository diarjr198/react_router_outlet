import React, { useState } from "react";
import Modal from "./Modal";

function ListUser({ item }) {
  const [showModal, setShowModal] = React.useState(false);
  const [isEdit, setIsEdit] = useState({
    username: false,
    email: false,
    phone: false,
    website: false,
  });
  const [data, setData] = useState({
    username: item.username,
    email: item.email,
    phone: item.phone,
    website: item.website,
  });

  const onClickEdit = (name) => {
    setIsEdit({ ...isEdit, [name]: true });
  };

  const onClickSave = () => {
    var superSecret = Object.keys(isEdit).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});
    setIsEdit(superSecret);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  const onChangeValue = (e) => {
    setData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    // console.log(data);
  };

  return (
    <tr className="h-12 hover:bg-slate-200">
      <td className="text-center">{item.id}</td>
      <td onClick={() => onClickEdit("username")}>
        {!isEdit.username ? (
          <p>{data.username}</p>
        ) : (
          <input
            className="w-[95%]"
            type="text"
            name="username"
            value={data.username}
            onChange={onChangeValue}
          />
        )}
      </td>
      <td onClick={() => onClickEdit("email")}>
        {!isEdit.email ? (
          <p>{data.email}</p>
        ) : (
          <input
            className="w-[95%]"
            type="text"
            name="email"
            value={data.email}
            onChange={onChangeValue}
          />
        )}
      </td>
      <td onClick={() => onClickEdit("phone")}>
        {!isEdit.phone ? (
          <p>{data.phone}</p>
        ) : (
          <input
            className="w-[95%]"
            type="text"
            name="phone"
            value={data.phone}
            onChange={onChangeValue}
          />
        )}
      </td>
      <td onClick={() => onClickEdit("website")}>
        {!isEdit.website ? (
          <p>{data.website}</p>
        ) : (
          <input
            className="w-[95%]"
            type="text"
            name="website"
            value={data.website}
            onChange={onChangeValue}
          />
        )}
      </td>
      <td>
        <div className="w-full flex gap-2 justify-center">
          <button
            disabled={
              isEdit.username || isEdit.email || isEdit.phone || isEdit.website
                ? false
                : true
            }
            className="h-8 w-[80px] bg-green-500 text-white"
            onClick={() => onClickSave()}
          >
            Edit
          </button>
          <button
            className="h-8 w-[80px] bg-cyan-500 text-white"
            onClick={() => setShowModal(true)}
          >
            View
          </button>
          <button className="h-8 w-[80px] bg-red-500 text-white">Delete</button>
        </div>
      </td>

      {showModal ? <Modal onCloseModal={onCloseModal} /> : null}
    </tr>
  );
}
export default ListUser;
