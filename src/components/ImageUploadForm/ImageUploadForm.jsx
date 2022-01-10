import { useState } from 'react';
import { useDispatch } from 'react-redux';

function ImageUploadForm() {
  // const [imageDescription, setImageDescription] = useState('');
  const [imageSelected, setImageSelected] = useState('');
  const dispatch = useDispatch();

  const onImageSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'UPLOAD_IMAGE',
      payload: imageSelected
    });
  }

  return (
    <div className="grid-col grid-col_5">
      <h3>Image Upload:</h3>
      <form className="uploadForm"
        onSubmit={onImageSubmit}>
        {/* <input
          type="text"
          placeholder="provide a description"
          value={imageDescription}
          onChange={(e) => setImageDescription(e.target.value)} /> */}
        <input
          type="file"
          onChange={(e) => setImageSelected(e.target.files[0])} />
        <button>Submit</button>
      </form>
    </div>
  );
}


export default ImageUploadForm;

