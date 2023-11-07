import Lang from "./Lang";

export default function Jumpon() {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-slate-800 dark:text-zinc-300">Skills and Expertise:</h1>
      <p className="py-2 text-lg text-slate-700 dark:text-zinc-400">I am an expert using the following development tools:</p>
      <div className="items-center justify-center">
       <Lang />
      </div>
    </div>
  )
}