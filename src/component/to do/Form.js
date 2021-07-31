import React from "react";

const Form = ({ addTodo, updateTodo, editedData }) => {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!title || !description) return;
        if (isEdit) {
            updateTodo(editedData.id, { title, description });
        } else {
            addTodo({ title, description });
        }
        setTitle("");
        setDescription("");
    };

    React.useEffect(() => {
        setTitle(editedData.title);
        setDescription(editedData.description);
    }, [editedData]);
    const isEdit = Object.keys(editedData).length > 0;
    const tombol = isEdit ? 'Update' : 'Tambah';

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>title</label>
                <div>
                    <input
                        type="text"
                        className="input"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>

            </div>
            <div>
                <label>description</label>
                <div>
                    <textarea
                        value={description}
                        onChange={e => setDescription(e.target.value)} />
                </div>
            </div>
            <button type='submit'>{tombol}</button>
        </form>
    );
}

export default Form;