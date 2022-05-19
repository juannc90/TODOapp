import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext)

    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    return (
        <section>
            <input
                className="TodoSearch"
                placeholder='Busca algún To Do'
                value={searchValue}
                onChange={onSearchValueChange}
            />
        </section>
    )
}

export { TodoSearch }