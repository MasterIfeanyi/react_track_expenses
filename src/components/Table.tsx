import React from 'react'
import { Item } from "../types/Items"
import Row from "./Row"

type TableProps = {
    items: Item[]
    handleDelete: (id: number) => void
}

const Table = ({items, handleDelete}: TableProps) => {
  return (
    <div className="row">
        <div className="col-12">
            <div className="table-responsive">
                <table className="table tableDesign">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <Row key={index} item={item} handleDelete={handleDelete} />
                        ))}
                    </tbody>
                </table>
            </div>              
        </div> 
    </div>
  )
}

export default Table