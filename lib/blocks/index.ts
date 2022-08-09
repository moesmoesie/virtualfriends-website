export { default as AboutBlock } from "./AboutBlock";
export { default as OffersBlock } from "./OffersBlock";
export { default as ContactBlock } from "./ContactBlock";
export { default as HomeLandingBlock } from "./HomeLandingBlock";
export { default as UnqiueSellingPointsBlock } from "./UniqueSellingPointsBlock";
export { default as HeaderBlock } from "./HeaderBlock";
export { default as FooterBlock } from "./FooterBlock";
export { default as PageBlock } from "./PageBlock";
export { default as SpacerBlock} from './SpacerBlock'

import SpacerStoryblok from "./SpacerBlock/storyblok";
import HomeAboutModuleStoryblok from "./AboutBlock/storyblok";
import HowWeWorkStoryblok from "./HowWeWorkBlock/storyblok";
import OffersStoryblok from "./OffersBlock/storyblok";
import UniqueSellingPointsStoryblok from "./UniqueSellingPointsBlock/storyblok";
import ContactStoryblok from "./ContactBlock/storyblok";
import HeaderStoryblok from "./HeaderBlock/storyblok";
import FooterStoryblok from "./FooterBlock/storyblok";

export const storyblokComponents = {
    spacer : SpacerStoryblok,
    aboutMe: HomeAboutModuleStoryblok,
    howWeWork: HowWeWorkStoryblok,
    productOffering: OffersStoryblok,
    uniqueSellingPoints: UniqueSellingPointsStoryblok,
    contact: ContactStoryblok,
    header: HeaderStoryblok,
    footer: FooterStoryblok
}