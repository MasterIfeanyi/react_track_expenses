import React from 'react'

type AddItemProp = {
    price: number
    setPrice: React.Dispatch<React.SetStateAction<number>>
    product: string
    setProduct: React.Dispatch<React.SetStateAction<string>>
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const AddItem = ({ price, setPrice, product, setProduct, handleSubmit }: AddItemProp) => {
  return (
    <div className="row d-flex justify-content-center">
        <div className="col-lg-6">
            <div className="cardStyle">
                <form action="" className="row" onSubmit={handleSubmit}>
                    <div className="form-group col-12 my-2">
                        <label htmlFor="name" className="form-label h4">Product Name</label>
                        <input
                            id="name"
                            className='form-control'
                            type='text'
                            placeholder='Enter Product Name'
                            value={product}
                            onChange={(e) => setProduct(e.target.value)}
                        />
                    </div>
                    <div className="form-group col-12 my-2">
                        <label htmlFor="price" className="form-label h4">Product Price</label>
                        <input
                            id="price"
                            className='form-control'
                            type='number'
                            placeholder='Enter Price'
                            value={price}
                            onChange={(e) => setPrice(parseInt(e.target.value))}
                        />   
                    </div>
                    <div className="text-center">
                        <button className='form-button btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div> 
  )
}

export default AddItem