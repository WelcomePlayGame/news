'use client';
import axios, { AxiosError } from 'axios';
import { saveComment } from '@/lib/action';
const AddComment = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      const response = await axios.post('/api/newcomment', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Success:', response.data);
      await saveComment(formData);
      window.location.reload();
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      if (axiosError.response) {
        console.error('Error:', axiosError.response.data.message);
      } else {
        console.error('Error:', axiosError.message || 'Something went wrong');
      }
    }
  };
  return (
    <main>
      <form
        className={`flex flex-col w-[100%] border-t-[1px] border-b-[1px] mb-[20px] p-[20px]`}
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Write email"
          className={`border-[3px] rounded-[5px] m-[5px] text-center p-[7px]`}
          name="email"
        />
        <input
          type="text"
          placeholder="Write name"
          className={`border-[3px] rounded-[5px] m-[5px] text-center p-[7px]`}
          name="name"
        />
        <textarea
          placeholder="Write comment"
          className={`border-[3px] rounded-[5px] m-[5px] text-center `}
          name="comment"
        />
        <button
          type="submit"
          className={`uppercase bg-slate-600 w-[200px] lg:w-[300px] rounded block mt-[20px] mx-auto p-[7px] text-[#fff] font-semibold`}
        >
          send
        </button>
      </form>
    </main>
  );
};
export default AddComment;
