import { Button, Section, Text } from "@/components/atoms";
import { ButtonColorType, ButtonTypeType } from "@/components/atoms/button/types";
import { PageLayout } from "@/components/organisms";
import { Divider, Flex, Row, Space } from "antd";

export default function () {
  const buttonColors: ButtonColorType[] = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "pink",
    "rose",
  ];
  const buttonTypes: ButtonTypeType[] = ["solid", "outline", "ghost", "soft"];

  return (
    <Flex className="w-full min-h-screen" justify="center" align="center">
      <PageLayout title="Button">
        {buttonColors.map((color, index) => (
          <div key={`${color}_${index}`}>
            <Divider orientation="left">{color}</Divider>
            <div className="flex flex-col gap-2">
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
                  <Button buttonSize="xs" buttonColor={color} buttonType={type} loading>
                    xs {type}
                  </Button>
                  <Button buttonSize="sm" buttonColor={color} buttonType={type} loading>
                    sm {type}
                  </Button>
                  <Button buttonSize="default" buttonColor={color} buttonType={type} loading>
                    default {type}
                  </Button>
                  <Button buttonSize="default" buttonColor={color} buttonType={type} disabled>
                    disabled {type}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </PageLayout>
    </Flex>
  );
}
