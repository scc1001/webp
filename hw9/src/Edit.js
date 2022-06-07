import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, submittingStatus }) => {
  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }

  // TODO del
  console.log(note);

  function addItem() {
    submittingStatus.current = true
    add(function (prevData) {
      return [       
        {
          id: v4(),
          note,
        },
        ...prevData,
      ];
    });
  }

  return (
    <div>
      <h1>CGU TODO LIST</h1>
      <p>記事：
      <input type="text" value={note} onChange={noteChange} />
      <button onClick={addItem} className="add">
        新增
      </button>
      </p>
    </div>
  );
};

export default Edit;