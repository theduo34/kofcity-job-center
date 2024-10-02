import WithContentLayout from '../../../layout/hoc/WithContentLayout';
import { withBaseLayout } from '../../../layout/hoc/WithBaseLayout/withBaseLayout';
import { SlidersOutlined } from "@ant-design/icons";
import KjcImage from "../../../../builders/KjcImage";
import { useEffect, useState } from "react";
import { Skeleton } from 'antd'; // Import Skeleton

type sourceInterface = {
    id: string,
    name: string
}

interface Article {
    id: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    source: sourceInterface;
    totalResults: number
}

const IndustryTrends: React.FunctionComponent = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [results, setResults] = useState<number>(0);

    const API_KEY = import.meta.env.VITE_APP_API_KEY;

    const today = new Date().toISOString().split('T')[0];
    const url = 'https://newsapi.org/v2/everything?' +
        'domains=bbc.co.uk,techcrunch.com,engadget.com' +
        `from=${today}` +
        'sortBy=popularity&' +
        `apiKey=${API_KEY}`;

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    const errorResponse = await response.json();
                    console.error('Error fetching articles:', errorResponse);
                    throw new Error(errorResponse.message || 'Network response was not ok');
                }
                const data = await response.json();
                setArticles(data.articles);
                setResults(data.totalResults);
            } catch (err) {
                //eslint-disable-next-line
                // @ts-ignore
                setError(err.message || 'Error fetching articles. Please try again later.');
                console.error(err);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            }
        };

        fetchArticles();
    }, [url]);

    return (
        <WithContentLayout>
            <div className={"items-center space-y-4 md:space-y-8"}>
                <div className={"flex items-center justify-between"}>
                    <div
                        className={"flex items-center max-w-max text-md md:text-lg py-1 md:py-2  px-2 md:px-4 border border-gray-300 rounded-md hover:shadow-lg bg-kjcBtn-900 hover:bg-kjcBtn-950 cursor-pointer text-white"}>
                        <SlidersOutlined />
                        <span className={"font-semibold ml-1 "}>Industry trends</span>
                    </div>
                    <p className={"pe-8 font-semibold text-md md:text-lg"}>Total results: {results}</p>
                </div>

                {loading ? (
                    <div className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"}>
                        {[...Array(6)].map((_, index) => (
                            <Skeleton key={index} active paragraph={{ rows: 4 }} />
                        ))}
                    </div>
                ) : (
                    <>
                        {error && <div>{error}</div>}
                        {articles.length === 0 && !loading && <div>No articles found.</div>}
                        <div className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"}>
                            {articles.map((article) => (
                                <a key={article.id} href={article.url} target="_blank" rel="noopener noreferrer">
                                    <div
                                        className={"border border-gray-200 rounded-lg p-2 md:p-4 lg:p-6 shadow-lg flex flex-col justify-between"}
                                        style={{ height: '420px' }}
                                    >
                                        <div className={"space-y-4"}>
                                            <p>{article.source.name}</p>
                                            <h2 className={"text-lg font-semibold line-clamp-2"}>{article.description}</h2>
                                            <p className={"flex max-w-max items-center py-1 px-6 border border-neutral-200"}>#Web</p>
                                            <p>{article.publishedAt}</p>
                                        </div>
                                        {article.urlToImage && (
                                            <div className={"w-full"}>
                                                <KjcImage
                                                    alt={article.title}
                                                    src={article.urlToImage}
                                                    className={"w-full h-auto object-cover object-center rounded-md"}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </WithContentLayout>
    );
};

export default withBaseLayout(IndustryTrends);
