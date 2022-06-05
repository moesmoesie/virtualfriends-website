import { createComponent } from "../../utils";

export default createComponent({
  name: "button",
  title: "Button",
  fields: [
    {
      type: "string",
      name: "content",
      title: "Content",
    },
  ],
});
