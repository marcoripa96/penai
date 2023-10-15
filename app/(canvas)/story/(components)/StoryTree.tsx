'use client'

import { useState } from "react";
import { StoryInput } from "./StoryInput";

type StoryTreeState = {
  title: string;
  introduction: string;
  storyOptions: StoryTreeOption[][];
}

type StoryTreeOption = {
  text: string;
  selected: boolean;
}

export const StoryTree = () => {
  const [storyTree, setStoryTree] = useState<StoryTreeState>({ title: '', introduction: '', storyOptions: [] });

  const handleStoryInputChange = (field: 'title' | 'introduction', value: string) => {
    setStoryTree((s) => ({
      ...s,
      [field]: value
    }))
  }

  return (
    <div className="flex flex-col">
      <StoryInput
        title={storyTree.title}
        introduction={storyTree.introduction}
        onChange={handleStoryInputChange} />
    </div>
  )
};
