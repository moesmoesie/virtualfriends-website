import { defineType, defineField } from "sanity";
import { createModulePreview } from "../../sanity.helpers";
import { AiOutlinePhone } from "react-icons/ai";

export default defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  icon: AiOutlinePhone,
  preview: createModulePreview("Contact", AiOutlinePhone),
  groups: [
    {
      name: "module",
      title: "Module settings",
    },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "body",
      type: "rich-text",
      title: "Body",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
    }),
    defineField({
      name: "primaryCallToAction",
      type: "link",
      title: "Primary Call to action",
    }),
    defineField({
      name: "secondaryCallToAction",
      type: "link",
      title: "Secondary Call to action",
    }),
    defineField({
      name: "module",
      group: "module",
      title: "Module Settings",
      type: "module",
    }),
  ],
});
