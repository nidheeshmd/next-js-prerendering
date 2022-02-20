import React from "react";

function ProductList({products}) {
    return(
        <React.Fragment>
            <h1>List of Products</h1>
            {products.map(product => {
                return (<div key={product.id}>
                            <h2>
                                {product.id} {product.title} {product.price}
                            </h2>
                            <hr />
                        </div>)
            })}
        </React.Fragment>
    )
}

export default ProductList;

export async function getStaticProps() {
    console.log('Generating / Regenerating ProductList');
    const response = await fetch('http://localhost:4000/products');
    const data = await response.json();

    return {
        props: {
          products: data
        },
        revalidate: 10
        /*to regenerate this page all 30 secs. This allow to update the values or pages, without build the all app.
        Since the html pages generated at the build time, no api value modifications would affect on these HTML pages.
        Using these mechanism to update the HTML files to show updated API values.
        The page regeneration will happen after the time specified and only execute if a page request is called.
        It seems the page with updated values will display soon after the value change. */
      }

}