import { Button, Card, Section, Tooltip } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";

export default function TooltipPage() {
  return (
    <PageLayout title="<Tooltip />">
      <Section className="flex flex-col gap-4">
        <Card className="w-full max-w-lg h-64 col-center">
          <div className="grid grid-cols-3 grid-rows-3 gap-4">
            <Tooltip title="This is Top Left Tooltip" placement="topLeft">
              <Button buttonSize="sm">Top Left</Button>
            </Tooltip>
            <Tooltip title="This is Top Tooltip" placement="top">
              <Button buttonSize="sm">Top</Button>
            </Tooltip>
            <Tooltip title="This is Top Right Tooltip" placement="topRight">
              <Button buttonSize="sm">Top Right</Button>
            </Tooltip>
            <Tooltip title="This is Left Tooltip" placement="left">
              <Button buttonSize="sm">Left</Button>
            </Tooltip>
            <div />
            <Tooltip title="This is Right Tooltip" placement="right">
              <Button buttonSize="sm">Right</Button>
            </Tooltip>
            <Tooltip title="This is Bottom Left Tooltip" placement="bottomLeft">
              <Button buttonSize="sm">Bottom Left</Button>
            </Tooltip>
            <Tooltip title="This is Bottom Tooltip" placement="bottom">
              <Button buttonSize="sm">Bottom</Button>
            </Tooltip>
            <Tooltip title="This is Bottom Left Tooltip" placement="bottomRight">
              <Button buttonSize="sm">Bottom Right</Button>
            </Tooltip>
          </div>
        </Card>
      </Section>
    </PageLayout>
  );
}
