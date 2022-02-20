function NewsArticleList({articles}) {
    return (
        <>
        <h2>List of News Articles</h2>
        {
            articles.map(article => {
                return (
                    <div key={article.id}>
                        <h3>{article.id}</h3>-<h3>{article.title}</h3> | <h3>{article.category}</h3>
                    </div>
                )
            })
        }
        </>
    );
}

export default NewsArticleList;

export async function getServerSideProps() {
    const response = await fetch('http://localhost:4000/news');
    const data = await response.json();

    return {
        props: {
            articles: data,
        }
    }
}

/* server side rendering. Create html on request and send to client.
So the data will be latest and effect API data changes on time.
But not as fast as ISR */