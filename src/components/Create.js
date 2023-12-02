import { useState } from "react";

const Create =() =>{
    const[title,setTitle]=useState('');
    const[body,setBody]=useState('');
    const[author,setAuthor]=useState('');

    return(
        <div className="create">
            <h2> Dodaj nowy blog</h2>
            <form>
                <label>
                    Tytuł bloga
                </label>
                <input type="text" required value={title} onChange={(e) =>setTitle(e.target.value)}/>
                <label>
                    Treść bloga
                </label>
                <input type="text" required value={body} onChange={(e) =>setBody(e.target.value)}/>
                <label>
                    Autor bloga
                </label>
                <select value={author} onChange={(e) =>setAuthor(e.target.value)}>
                    <option value={"Marcin"}>Marcin</option>
                    <option value={"Jan"}>Jan</option>
                    <option value={"Karol"}>Karol</option>
                </select>
                <button>Dodaj Blog</button>

                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    )
}

export default Create;