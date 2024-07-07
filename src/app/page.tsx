import { title } from "process";
import { AntdProvider } from "./components/antd-provider";
import { TestComponent } from "./components/test";

export default function Home() {
  return (
    <div className="col-center h-screen">
      <AntdProvider>
        <TestComponent />
      </AntdProvider>
    </div>
  );
}
