import { primaryColors } from "@/mui-theme/_muiPalette";
import { Box, styled, TextField } from "@mui/material";
import React from "react";

interface InputFieldCommonProps {
  className?: string;
  placeholder?: string;
}

export const InputFieldCommonStyle = styled(Box)`
  .MuiFormControl-root {
    width: 100%;
  }
  .MuiInputBase-root {
    border-bottom: 1px solid ${primaryColors.color949494};
    border-radius: 0;
    padding: 15px 0 5px;
    font-size: 18px;
    color: ${primaryColors.white};
    input {
      padding: 0;
    }
    fieldset {
      display: none;
    }
  }
`;

const InputFieldCommon = ({
  className,
  placeholder,
}: InputFieldCommonProps) => {
  return (
    <InputFieldCommonStyle className={className}>
      <TextField
        id="outlined-basic"
        variant="outlined"
        placeholder={placeholder}
      />
    </InputFieldCommonStyle>
  );
};

export default InputFieldCommon;
