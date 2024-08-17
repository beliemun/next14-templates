"use client";
import { Animate, Button } from "@/components/atoms";

const URL = "https://drive.google.com/uc?export=download&id=15uBefeQLhTjXKov9s-ed9IJUgDDkqXIQ";
export const DownloadButton = () => {
  const handleClick = () => {
    window.location.href = URL;
  };

  return (
    <div className="fixed bottom-0 right-0 p-8">
      <Animate>
        <Button onClick={handleClick} className="shadow-md">
          이력서 PDF 다운로드
        </Button>
      </Animate>
    </div>
  );
};
