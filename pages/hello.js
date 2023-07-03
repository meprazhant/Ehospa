import React from 'react'

function hello() {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://th.bing.com/th/id/OIP.RAk0wTpA1sO5rqsVXz1MZQHaE8?pid=ImgDet&rs=1" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default hello