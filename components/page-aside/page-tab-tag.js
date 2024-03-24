import { getTags as get } from '@/lib/action';
import TagsGrid from './page-tab-tag-grid';
const PageTabTag = () => {
  const TagFetch = async () => {
    const tags = await get();
    return <TagsGrid tags={tags} />;
  };
  return (
    <main>
      <span>
        <TagFetch />
      </span>
    </main>
  );
};
export default PageTabTag;
