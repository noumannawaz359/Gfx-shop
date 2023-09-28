import React, { useState, useEffect, useRef } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  ContentBlock,
  CharacterMetadata,
  ContentState,
  Modifier,
} from "draft-js";
import { genKey } from "draft-js";
import { List, Repeat } from "immutable";
import style from "../pages/feedback.module.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function FeedBack() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [data, setData] = useState(" ");

  const fileInputRef = useRef(null);

  const values = {
    feedback: "now this is good",
  };

  const handleInlineStyleClick = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };
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

  useEffect(() => {
    const contentState = ContentState.createFromText(values.feedback);
    const newEditorState = EditorState.createWithContent(contentState);
    setEditorState(newEditorState);
  }, []);

  const handleKeyPointClick = () => {
    const currentContent = editorState.getCurrentContent();
    const selection = editorState.getSelection();
    const keyPointBlock = new ContentBlock({
      key: genKey(),
      type: "unordered-list-item",
      characterList: List(Repeat(CharacterMetadata.create(), 21)),
    });
    const newContent = currentContent.merge({
      blockMap: currentContent
        .getBlockMap()
        .set(keyPointBlock.key, keyPointBlock),
      selectionBefore: selection,
      selectionAfter: selection.merge({
        anchorKey: keyPointBlock.key,
        anchorOffset: 0,
        focusKey: keyPointBlock.key,
        focusOffset: 0,
      }),
    });
    const newEditorState = EditorState.push(
      editorState,
      newContent,
      "insert-fragment"
    );
    setEditorState(
      EditorState.forceSelection(newEditorState, newContent.getSelectionAfter())
    );
  };

  const handleEmojiClick = () => {
    const currentContentState = editorState.getCurrentContent();
    const selection = editorState.getSelection();
    const emojiText = "😀";
    const newContentState = Modifier.insertText(
      currentContentState,
      selection,
      emojiText,
      undefined,
      undefined
    );
    const newEditorState = EditorState.push(
      editorState,
      newContentState,
      "insert-characters"
    );
    setEditorState(
      EditorState.forceSelection(
        newEditorState,
        newContentState.getSelectionAfter()
      )
    );
  };

  return (
    <div className={style.container}>
      <div className={style.division}>
        <button
          type="button"
          className={style.boldButton}
          onClick={() => handleInlineStyleClick("BOLD")}
        >
          <i class=" fa fa-solid fa-bold "></i>
        </button>
        <button
          type="button"
          className={style.italicButton}
          onClick={() => handleInlineStyleClick("ITALIC")}
        >
          <i class=" fa fa-solid fa-italic"></i>
        </button>
        <button
          type="button"
          className={style.underlineButton}
          onClick={() => handleInlineStyleClick("UNDERLINE")}
        >
          <i class=" fa fa-solid fa-underline"></i>
        </button>
        <button
          type="button"
          className={style.bullets}
          onClick={handleKeyPointClick}
        >
          <i class=" fa fa-solid fa-list"></i>
        </button>
        <button type="button" className={style.linkButton}>
          <i class="fa fa-solid fa-link"></i>
        </button>
        <button
          className={style.image}
          onClick={handleButtonClick}
          type="button"
        >
          <i class="fa fa-solid fa-image"></i>;
        </button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <button
          type="button"
          className={style.emojiButton}
          onClick={handleEmojiClick}
        >
          <i class="fa fa-regular fa-face-smile"></i>
        </button>
      </div>
      <hr></hr>
      <div className={style.editor_container}>
        <Editor
          defaultValue={values.feedback}
          placeholder="Write Here"
          editorState={editorState}
          onChange={setEditorState}
        />
      </div>
    </div>
  );
}

export default FeedBack;
