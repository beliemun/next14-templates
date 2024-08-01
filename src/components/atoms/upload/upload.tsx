"use client";

import { cn } from "@/lib/utils";
import {
  GetProp,
  Image,
  Upload as UploadAntd,
  UploadProps as UploadAntdProps,
  UploadFile,
} from "antd";
import { ReactNode, useState } from "react";

export interface UploadProps extends UploadAntdProps {
  button?: ReactNode;
}

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export const Upload = ({
  className,
  action = "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  button,
  ...rest
}: UploadProps) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);
  return (
    <>
      <UploadAntd
        className={cn(className)}
        listType="picture"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        action={action}
        {...rest}
      >
        {fileList.length >= 8 ? null : button}
      </UploadAntd>
      {previewImage && (
        <Image
          wrapperStyle={{ display: "none" }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
          alt={"placeholder"}
        />
      )}
    </>
  );
};
