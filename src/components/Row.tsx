import React from 'react'
import { Item } from "../types/Items"
import { FaTrashAlt } from "react-icons/fa"

type RowProps = {
    item: Item
    handleDelete: (id: number) => void
}

const Row = ({item, handleDelete}: RowProps) => {
  return (
    <tr>
        <td>{item.product}</td>
        <td>{`$`} {item.price}</td>
        <td><button onClick={() => handleDelete(item.id)}><FaTrashAlt /></button></td>
    </tr>
  )
}

export default Row