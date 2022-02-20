function ArticleListByCategory({ category, articles }) {
    return (
        <>
        <h1>Showing news for category {category}</h1>
        {
            articles.map(article => {
                return (
                    <div key={article.id}>
                        <h2>{article.id} - {article.title}</h2>
                        <p>{article.description}</p>
                        <hr/>
                    </div>
                )
            })
        }
        </>
    )
}

export default ArticleListByCategory;

export async function getServerSideProps(context) {
    const { params, req, res, query } = context;
    const { category } = params;
    console.log(req.headers.cookie);
    res.setHeader('Set-Cookie', ['name=nidheesh']);
    /* req and res (request and response) are the parameters from context */
    /* query is the query string from the url.Eg: for url 'news/sports?subcategory=football', these values will available from query */
    const response = await fetch(`http://localhost:4000/news?category=${category}`);
    const data = await response.json();
    return{
        props:{
            articles: data,
            category,
        }
    }
}