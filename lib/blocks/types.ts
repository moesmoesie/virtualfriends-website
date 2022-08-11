import { SbBlokData } from "@storyblok/react"

export interface Module {
    paddingTop?: number
    paddingBottom?: number,
    backgroundColor?: string,
    [propName: string]: any;
}

export interface ContentBlock {
    module? : Module
}

export interface Blok extends SbBlokData{
    [propName: string]: any;
}
