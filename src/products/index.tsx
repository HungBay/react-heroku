import React, { Component, useState } from 'react';

// class
// class Products extends Component<ProductInterface, State> {
//     // state: People = {
//     //     name: 'string',
//     //     age: 0,
//     //     sex: 'Female'
//     // }

//     constructor(props: ProductInterface) {
//         super(props);
//         this.state = {
//             people: {
//                 name: 'string',
//                 age: 0,
//                 // sex: 'Female'
//             },
//             data: []
//         }
//     }
//     // call api => data =[123,2323]

//     handleClick = () => {
//         this.setState(
//             {
//                 people: {
//                     name: 'Hung',
//                     age: 24,
//                     sex: 'Male'
//                 }
//             }
//         )
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.people.name} - {this.state.people.age} - {this.state.people.sex}
//                 <button type='button' onClick={this.handleClick}>Click</button>
//             </div>
//         )
//     }
// }

interface ProductInterface {
    name: string
    size: string
    value: 1 | 2 | 3 | 4 | 5
}
interface State {
    people: People
    data: any[]
}
interface People {
    name: string
    age: number
    sex?: 'Female' | 'Male'
}
// functional
function Products({
    name,
    size,
    value,
}: ProductInterface) {
    const [people, setPeople] = useState<People>({
        name: '',
        age: 0,
        sex: 'Male'
    })

    const handleClick = () => {
        setPeople({
            name: 'Hung',
            age: 24,
            sex: 'Male'
        })
    }

    return (
        <>
            {/* <div style={{ background: value === 1 ? 'blue' : 'red' }}>
                {name} - {size}
                jaskdjlsdk
            </div> */}
            ten - {people.name}
            <br />
            tuoi - {people.age}
            <br />
            gioi tinh - {people.sex}
            <br />
            <button type='button' onClick={handleClick}>Click</button>
        </>
    )
}

export default Products;