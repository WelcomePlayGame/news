'use client';
import { deleteArticleById } from '@/lib/action';
const PageListGrid = ({ articles }: any) => {
  return (
    <main>
      <table>
        <thead></thead>
        <tbody>
          {articles.map(
            (article: {
              _id: string;
              title: string;
              time: Date;
              slug: string;
            }) => (
              <tr key={article._id} className={`flex justify-evenly`}>
                <td>{article.title}</td>
                <td>{article.time.toString()}</td>
                <td>
                  <button
                    onClick={() => deleteArticleById(article._id, article.slug)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </main>
  );
};
export default PageListGrid;
