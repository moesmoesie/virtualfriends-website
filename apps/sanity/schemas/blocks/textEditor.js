import React from "react";

export default {
  name: "textEditor",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Body 2", value: "body-2" },
        { title: "Body 3", value: "body-3" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Number", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
          { title: "Code", value: "code" },
          {
            title: "Gradient",
            value: "gradient",
            blockEditor: {
              render: (props) => {
                return (
                  <span style={{ backgroundColor: "green" }}>
                    {props.children}
                  </span>
                );
              },
            },
          },
        ],
        annotations: [
          {
            type: "internalLink",
            name: "internalLink",
            title: "Internal Link",
          },
        ],
      },
    },
  ],
};
