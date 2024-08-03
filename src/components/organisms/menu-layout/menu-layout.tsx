import { unstable_cache } from "next/cache";
import { Contents, ResizableWapper, Sider } from "./components";
import { Layout } from "@/components/atoms";
import getUser from "@/lib/user";
import { getSession } from "@/lib/session";

const getCachedGetUser = unstable_cache(getUser, ["get-user"], { tags: ["get-users"] });

export const MenuLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getSession();
  const user = await getCachedGetUser(session);
  return (
    <Layout>
      <ResizableWapper>
        <Sider user={user} />
        <Contents>{children}</Contents>
      </ResizableWapper>
    </Layout>
  );
};
