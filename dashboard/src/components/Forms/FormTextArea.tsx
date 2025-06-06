/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { LightTooltip } from "@components/muiComponents";
import { InputLabel, Typography } from "@mui/material";
import { Capitalize } from "@utils/Utils";
import { Controller } from "react-hook-form";

const FormTextArea = ({ data, control }: any) => {
  const { name, isOptional, typeName } = data;
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: isOptional ? false : true
      }}
      defaultValue={null}
      key={name}
      render={({ field: { onChange, value } }) => (
        <>
          <div className="form-fields">
            <InputLabel
              className="form-textfield-label"
              required={isOptional ? false : true}
            >
              {Capitalize(name)}
            </InputLabel>
            <LightTooltip title={`Data Type: (${typeName})`}>
              <Typography
                color="#666666"
                textOverflow="ellipsis"
                maxWidth="160px"
                overflow="hidden"
                fontSize={14}
              >{`(${typeName})`}</Typography>
            </LightTooltip>
          </div>
          <div className="w-100">
            {/* <TextArea
              maxRows={4}
              aria-label="maximum height"
              placeholder={name}
              onChange={onChange}
              minRows={2}
              className="form-textfield form-textarea-field"
              value={value}
            /> */}
            <textarea
              placeholder={name}
              onChange={onChange}
              className="form-textfield form-textarea-field"
              value={value}
            />
          </div>
        </>
      )}
    />
  );
};
export default FormTextArea;
