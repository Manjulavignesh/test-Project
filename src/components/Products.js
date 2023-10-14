const Products=(props)=>
{
return (<ul>
    <div>{props.id}</div>
    <div>{props.price}</div>
    <div>{props.name}</div>
    <div>{props.catagory}</div>
</ul>)
}
export default Products;