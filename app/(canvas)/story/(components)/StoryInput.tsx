import { AutoResizingTextarea } from "./AutoResizingTextArea"

type StoryInputProps = {
  title: string;
  introduction: string;
  onChange: (field: 'title' | 'introduction', value: string) => void;
}

export const StoryInput = ({ title, introduction, onChange }: StoryInputProps) => {
  return (
    <div className="flex flex-col p-4 border rounded-md border-slate-400 shadow-lg bg-background gap-4">
      <div className="flex flex-col">
        <div className="text-sm text-muted-foreground">Title</div>
        <input
          className="outline-none scroll-m-20 text-2xl font-semibold tracking-tight w-full"
          placeholder="The Lord of the Fallen"
          spellCheck={false}
          value={title}
          onChange={(value) => onChange('title', value.target.value)}
        />
      </div>

      <div className="h-[1px] bg-slate-400" />
      <div className="flex flex-col">
        <div className="text-sm text-muted-foreground">Incipit</div>
        <AutoResizingTextarea
          className="w-full"
          onChange={(value) => onChange('introduction', value.target.value)}
          value={introduction}
          spellCheck={false}
          placeholder="Once upon a time, in this desolate and forsaken realm, where the very air seemed to carry the weight of ancient regrets, there lived a fallen lord named Cedric Blackthorn. " />
      </div>

    </div>
  )
}