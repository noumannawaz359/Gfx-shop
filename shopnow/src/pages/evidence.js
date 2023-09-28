import React, { useState, useRef } from "react";
import styles from "../pages/report.module.css";
import { useForm, Controller } from "react-hook-form";
import { ReactMediaRecorder } from "react-media-recorder";

function Evidence() {
  const [data, setData] = useState({
    image: null,
  });

  const fileInputRef = useRef(null);

  const {
    control,
    formState: { errors },
  } = useForm();

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setData({ ...data, image: e.target.result });
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  const handleDelete = () => {
    setData({ ...data, image: null });
  };

  return (
    <div className={styles.feature}>
      <label htmlFor="Test Evidence">Test Evidence</label>
      <Controller
        name="testEvidence"
        control={control}
        rules={{ required: "This field is required" }}
        render={({ field }) => (
          <>
            <ReactMediaRecorder
              screen
              render={({ startRecording, stopRecording, mediaBlobUrl }) => (
                <div className={styles.inputContainer}>
                  {console.log({ mediaBlobUrl, image: data.image })}
                  <input
                    className={styles.imageInput}
                    {...field}
                    type="text"
                    value={data.image || mediaBlobUrl}
                    readOnly
                  />
                  <button
                    className={styles.deleteButton}
                    onClick={handleDelete}
                    type="button"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <button
                    className={styles.imageButton}
                    onClick={handleButtonClick}
                    type="button"
                  >
                    <i class="fa fa-solid fa-image fa-2x"></i>
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <div>
                    <button
                      className={styles.recordButton}
                      type="button"
                      onClick={startRecording}
                    >
                      <i className="fa fa-solid fa-record-vinyl fa-2x"></i>
                    </button>
                    <button
                      className={styles.recordButton}
                      type="button"
                      onClick={stopRecording}
                    >
                      <i className="fa fa-solid fa-stop-circle fa-2x"></i>
                    </button>
                  </div>
                </div>
              )}
            />
          </>
        )}
      />
    </div>
  );
}

export default Evidence;
