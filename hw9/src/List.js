import Item from "./Item";

const List = ({ listData, deleteData, submittingStatus }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, id } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            deleteData={deleteData}
            submittingStatus={submittingStatus}
          />
        );
      })}
    </div>
  );
};

export default List;