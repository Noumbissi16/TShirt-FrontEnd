import React from "react";
import CustomButton from "./CustomButton";

const AiPicker = ({ promt, setprompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea"
        value={promt}
        placeholder="Ask AI..."
        onChange={(e) => setprompt(e.target.value)}
        rows="5"
      ></textarea>
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type={"outline"}
            title={"Asking AI..."}
            customStyles={"text-xs"}
          />
        ) : (
          <>
            <CustomButton
              type={"outline"}
              title={"AI Logo"}
              handleClick={() => handleSubmit("logo")}
              customStyles={"text-xs"}
            />
            <CustomButton
              type={"filled"}
              title={"AI Full"}
              handleClick={() => handleSubmit("full")}
              customStyles={"text-xs"}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AiPicker;
