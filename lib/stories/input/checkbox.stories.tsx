import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox as Component } from "components/input/checkbox";
import { useState } from "react";

export default {
  title: "Input/Checkbox",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
  const [isSelected, setSelected] = useState(false);

  return (
    <div className="h-[600px]">
      <Component
        {...args}
        isSelected={isSelected}
        onChange={(isSelected) => setSelected(isSelected)}
      />
    </div>
  );
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  text: "Item",
};
