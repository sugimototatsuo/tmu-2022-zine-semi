import * as d3 from "d3";

export async function load() {
  const uri = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZ9b1A3fT0h_78kcIRpKUMotr2n7xJLamveN0O1usl28dO94DuLZnORVvz4K9eI9KKUYki0aHJnWjL/pub?gid=700951681&single=true&output=tsv";
  const zines = (await d3.tsv(uri)).slice(1).sort((a, b) => a.visibility.localeCompare(b.visibility));
  // console.log(groups);
  return { zines };
}
