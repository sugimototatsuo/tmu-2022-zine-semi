import * as d3 from "d3";

export async function load() {
  const uri = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZ9b1A3fT0h_78kcIRpKUMotr2n7xJLamveN0O1usl28dO94DuLZnORVvz4K9eI9KKUYki0aHJnWjL/pub?gid=700951681&single=true&output=tsv";
  let zines = (await d3.tsv(uri, d3.autoType))
    .sort((a, b) => b.imgs - a.imgs)
    .sort((a, b) => a.visibility.localeCompare(b.visibility));
  console.log(zines.length);

  zines = zines.map(d => ({
    ...d,
    available: d.visibility === '全体公開' && d.imgs > 0,
  }));
  
  return { zines };
}
