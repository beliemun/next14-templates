import { PageLayout } from "@/components/organisms";
import getMembersAction from "@/actions/members/get-members.action";
import { MemberList } from "./_components";

export default async function MemvbersPage() {
  const { members, count } = await getMembersAction(1);
  return (
    <PageLayout title="Members">
      <MemberList members={members} count={count} />
    </PageLayout>
  );
}
