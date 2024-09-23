"use client";
import { Animate, Button } from "@/components/atoms";

const RESUME_PDF = "https://bit.ly/4dxBNdh";
const CARRER_PDF = "https://bit.ly/47ORw6k";
const CARRER_WORD = "https://bit.ly/3BtzHh6";

export const DownloadButton = () => {
  const handleClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="fixed bottom-0 right-0 p-2 sm:p-8">
      <Animate>
        <div className="flex flex-col items-end gap-2 sm:gap-4">
          <div>
            <Button onClick={() => handleClick(RESUME_PDF)} className="block shadow-md">
              이력서(PDF) 다운로드
            </Button>
          </div>
          <div>
            <Button onClick={() => handleClick(CARRER_PDF)} className="shadow-md">
              경력기술서(PDF) 다운로드
            </Button>
          </div>
          <div>
            <Button onClick={() => handleClick(CARRER_WORD)} className="shadow-md">
              경력기술서(WORD) 다운로드
            </Button>
          </div>
        </div>
      </Animate>
    </div>
  );
};
