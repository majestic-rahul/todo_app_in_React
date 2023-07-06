import React, {useState} from "react";

export const NewToDoForm: React.FC<{
    addTodo: Function;
}> = (props) => {

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const submitTodo = () => {
        if(assigned !== '' && description !== ''){
            props.addTodo(description, assigned);
            setDescription('');
            setAssigned('');
        }
    }

    return(
        <div className="mt-5">
            <form onSubmit={e => {
                e.preventDefault();
                submitTodo();
            }}>
                <div className="mb-3">
                    <label className = "form-label">Assigned</label>
                    <input 
                        type="text" 
                        className = "form-control" 
                        required
                        onChange={e => setAssigned(e.target.value)}
                        value = {assigned}
                    ></input>
                </div>
                <div className="mb-3">
                    <label className = "form-label">Description</label>
                    <textarea 
                        className = "form-control"  
                        rows={3} 
                        required
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                    ></textarea>
                </div>
                <button 
                    type="submit" 
                    className = "btn btn-primary mt-3" 
                    onClick={submitTodo}
                    >
                        Add Todo
                </button>
            </form>
        </div>
    )
}
