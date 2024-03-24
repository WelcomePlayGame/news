import AddComment from './page-add-comment';
const Comments = () => {
  return (
    <main className={`flex flex-col`}>
      <div>
        <AddComment />
      </div>
      <div className={`flex flex-col bg-slate-400 rounded-[5px] p-[20px]`}>
        {/* <span>Author comment</span>
        <span>Will be commnt here</span> */}
      </div>
    </main>
  );
};
export default Comments;
