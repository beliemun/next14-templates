import { Button, Card, Divider, Section, Text, Tooltip } from "@/components/atoms";
import { PageLayout } from "@/components/organisms";

export default function () {
  return (
    <PageLayout title="<Tooltip />">
      <Divider orientation="left">Base Tooltip</Divider>
      <Section className="flex flex-col gap-4 pt-2">
        <Card className="w-full max-w-lg h-64 col-center">
          <div className="grid grid-cols-3 grid-rows-3 gap-4">
            <Tooltip title="This is Top Left Tooltip" placement="topLeft">
              <Button buttonSize="sm" buttonStyle="solid">
                Top Left
              </Button>
            </Tooltip>
            <Tooltip title="This is Top Tooltip" placement="top">
              <Button buttonSize="sm" buttonStyle="solid">
                Top
              </Button>
            </Tooltip>
            <Tooltip title="This is Top Right Tooltip" placement="topRight">
              <Button buttonSize="sm" buttonStyle="solid">
                Top Right
              </Button>
            </Tooltip>
            <Tooltip title="This is Left Tooltip" placement="left">
              <Button buttonSize="sm" buttonStyle="solid">
                Left
              </Button>
            </Tooltip>
            <div />
            <Tooltip title="This is Right Tooltip" placement="right">
              <Button buttonSize="sm" buttonStyle="solid">
                Right
              </Button>
            </Tooltip>
            <Tooltip title="This is Bottom Left Tooltip" placement="bottomLeft">
              <Button buttonSize="sm" buttonStyle="solid">
                Bottom Left
              </Button>
            </Tooltip>
            <Tooltip title="This is Bottom Tooltip" placement="bottom">
              <Button buttonSize="sm" buttonStyle="solid">
                Bottom
              </Button>
            </Tooltip>
            <Tooltip title="This is Bottom Left Tooltip" placement="bottomRight">
              <Button buttonSize="sm" buttonStyle="solid">
                Bottom Right
              </Button>
            </Tooltip>
          </div>
        </Card>
      </Section>
    </PageLayout>
  );
}
