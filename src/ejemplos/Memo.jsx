import React from 'react'


const Memo = React.memo(() => {

    let count = 0

    for (count; count <= 1000; count++) {
        console.log(count)
    }

    return (
        <div>
            <h3>Soy un memo</h3>
            {count}
        </div>
    )
})

export default Memo