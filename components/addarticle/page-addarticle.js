'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import PickerImage from '@/components/addarticle/page-pickerimage';
import { saveArticle as save } from '@/lib/action';
import classes from './page-addfom.module.css';
import { stateToHTML } from 'draft-js-export-html';
import SelectedCategory from '../selected_category/page-selected-category';
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((module) => module.Editor),
  { ssr: false }
);

const AddArticle = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [category, setCategory] = useState('war');
  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    // Сериализация состояния редактора в строку JSON для сохранения стилей
    const serializedState = JSON.stringify(rawContentState);
    // Для HTML
    const htmlContent = stateToHTML(contentState);

    const formData = new FormData(event.target);
    formData.append('htmlContent', htmlContent); // Для отображения в виде HTML
    formData.append('category', category);
    await save(formData);
  };
  return (
    <main>
      <form
        className={`flex flex-col items-center mt-[50px] `}
        onSubmit={handleSubmit}
      >
        <h2 className={`mb-[20px] text-[20px]`}>Add Article</h2>
        <div>
          <input
            type="text"
            title="title"
            name="title"
            placeholder="Название статьи"
            className={` border-3 border-{#333} bg-indigo-50 rounded-[5px] text-center`}
            required
          />
          <input
            type="text"
            title="seo_title"
            placeholder="seo title"
            name="seo_title"
            className={` border-3 border-{#333} bg-indigo-50 rounded-[5px] text-center ml-[20px]`}
            required
          />
          <input
            type="text"
            title="seo_description"
            placeholder="seo_description"
            name="seo_description"
            className={` border-3 border-{#333} bg-indigo-50 rounded-[5px] text-center ml-[20px]`}
            required
          />
          <input
            type="text"
            title="tag"
            placeholder="tag"
            name="tag"
            className={` border-3 border-{#333} bg-indigo-50 rounded-[5px] text-center ml-[20px]`}
            required
          />
          <SelectedCategory onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div className={`flex justify-around`}>
          <PickerImage label="Your image" name="image" />
          <div className={`${classes.editor_container}`}>
            <Editor
              editorState={editorState}
              onEditorStateChange={handleEditorChange}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
              name="editorState"
            />
          </div>
        </div>
        <button
          className={`bg-black rounded-[5px] text-[#fff] w-[200px] h-[50px] mt-[20px]`}
          type="submit"
        >
          Отправка
        </button>
      </form>
    </main>
  );
};
export default AddArticle;
