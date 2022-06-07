var Item = ({ id, note, deleteData, submittingStatus }) => {

    function deleteItem() {
        submittingStatus.current = true
        deleteData(function (prev) {
            return prev.filter(item => item.id !== id)
        })
    }
    function doneItem() {
        submittingStatus.current = true
        var note1 = note + "ok";
        note = {note1} ;
        return note
    }

    return (
        <div className="item">
            <div>
                {note}
                <button onClick={doneItem} className="done">完成</button>
                <button onClick={deleteItem} className="remove">刪除</button>
            </div>
        </div>
    );
};

export default Item;