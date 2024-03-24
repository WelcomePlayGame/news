'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import classes from './page-picker.module.css';
const PickerImage = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();
  const handlePicker = () => {
    imageInput.current.click();
  };
  const handleImagechange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={``}>
      <label htmlFor={name}>{label}</label>
      <div>
        <div className={classes.preview}>
          {!pickedImage && <p>No Image picked yet</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="Selected image" fill className={``} />
          )}
        </div>
        <div className={`flex flex-col items-center`}>
          <input
            style={{ display: 'none' }}
            type="file"
            name={name}
            id={name}
            accept="image/*"
            ref={imageInput}
            multiple
            onChange={handleImagechange}
            required
          />
          <button
            className={`bg-slate-900 text-[#fff] w-[200px] h-[50px] rounded-[10px] mr-[40px] mt-[20px]`}
            type="button"
            onClick={handlePicker}
          >
            Pick an image
          </button>
        </div>
      </div>
    </div>
  );
};
export default PickerImage;
