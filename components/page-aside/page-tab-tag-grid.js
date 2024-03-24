const TagsGrid = ({ tags }) => {
  return (
    <main>
      {tags.map((tag) => (
        <span className={`uppercase`} key={tag._id}>
          {tag.tag}
        </span>
      ))}
    </main>
  );
};
export default TagsGrid;
