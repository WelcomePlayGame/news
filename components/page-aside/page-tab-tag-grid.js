// const TagsGrid = ({ tags }) => {
//   return (
//     <main>
//       {tags.map((tag) => (
//         <span className={`uppercase`} key={tag._id}>
//           {tag.tag}
//         </span>
//       ))}
//     </main>
//   );
// };
// export default TagsGrid;
const TagsGrid = ({ tags }) => {
  // Создание уникального набора тегов по значению tag
  const uniqueTags = Object.values(
    tags.reduce((acc, tag) => {
      // Использование tag.tag как ключа для идентификации уникальности
      acc[tag.tag] = tag; // Это приведет к тому, что теги с одинаковым значением tag будут перезаписываться, оставляя только уникальные
      return acc;
    }, {})
  );

  return (
    <main>
      {uniqueTags.map((tag) => (
        <div
          className={`uppercase mb-[10px] mt-[10px] border-b-[1px]`}
          key={tag._id}
        >
          {tag.tag}
        </div>
      ))}
    </main>
  );
};

export default TagsGrid;
