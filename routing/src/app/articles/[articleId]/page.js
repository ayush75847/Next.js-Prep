import Link from "next/link";

async function Article({ params, searchParams }) {
  const { articleId } = await params;
  const { lang } = await searchParams;
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">News Article with {articleId}</h1>

      <h4 className="text-lg mb-4">Reading in language {lang}</h4>

      <div className="flex gap-4">
        <Link
          href="/articles/breaking-news-123?lang=en"
          className="text-blue-500 underline"
        >
          English
        </Link>
        <Link
          href="/articles/breaking-news-123?lang=es"
          className="text-blue-500 underline"
        >
          Spanish
        </Link>
        <Link
          href="/articles/breaking-news-123?lang=fr"
          className="text-blue-500 underline"
        >
          French
        </Link>
      </div>
    </div>
  );
}

export default Article;
