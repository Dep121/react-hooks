import React, { useId } from 'react'
 
function UseIdComponent() {
    const id = useId()
    return (
        <div>
            <label htmlFor={id}>Field({id}) 1</label>
            <input
                type="text"
                id={id}
            />
        </div>
    )
}
 
export default UseIdComponent