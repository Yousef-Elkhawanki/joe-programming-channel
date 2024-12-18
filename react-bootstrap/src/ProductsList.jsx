import React from 'react'

export default function ProductsList({ product_name, hideName }) {
    return !hideName && <li>product name is :{product_name}</li>;
}
