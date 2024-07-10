import { Button, Tooltip } from "@/components/atoms";
import { buttonColors, buttonTypes } from "@/components/atoms/button/types";
import { PageLayout } from "@/components/organisms";
import { HomeOutlined } from "@ant-design/icons";
import { Divider, Flex } from "antd";

export default function () {
  return (
    <Flex className="w-full min-h-screen" justify="center" align="center">
      <PageLayout title="Button">
        {buttonColors.map((color, index) => (
          <div key={`${color}_${index}`}>
            <Divider orientation="left">{color.toUpperCase()}</Divider>
            <div className="flex flex-col gap-2 pb-6">
              {buttonTypes.map((type, index) => (
                <div className="space-x-2 px-8 py-2" key={`${type}_${index}`}>
                  <Button buttonSize="xs" buttonColor={color} buttonType={type}>
                    xs {type}
                  </Button>
                  <Button buttonSize="sm" buttonColor={color} buttonType={type}>
                    sm {type}
                  </Button>
                  <Button buttonSize="default" buttonColor={color} buttonType={type}>
                    default {type}
                  </Button>

                  <Button buttonSize="default" buttonColor={color} buttonType={type} loading>
                    default {type}
                  </Button>
                  <Button buttonSize="default" buttonColor={color} buttonType={type} disabled>
                    disabled {type}
                  </Button>
                  <Tooltip title="Home">
                    <Button buttonSize="default" buttonColor={color} buttonType={type}>
                      <HomeOutlined />
                    </Button>
                  </Tooltip>
                </div>
              ))}
            </div>
          </div>
        ))}
      </PageLayout>
    </Flex>
  );
}
