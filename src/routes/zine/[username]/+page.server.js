import * as d3 from "d3";

export async function load({ params }) {
  const username = params.username;
  const uri = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZ9b1A3fT0h_78kcIRpKUMotr2n7xJLamveN0O1usl28dO94DuLZnORVvz4K9eI9KKUYki0aHJnWjL/pub?gid=700951681&single=true&output=tsv";
  const zines = (await d3.tsv(uri)).slice(1)
    .filter(d => d.visibility === '全体公開')
    .filter(d => d.imgs > 0)

  const zine = zines.find(d => d.username === username);

  if (zine.imgs == 0) {
    return { zines, zine, images: [] };
  }

  const images = d3.range(1, zine.imgs).map((d,i) => ({
    id: i,
    name: `Page ${d}`,
    imgurl: `/zine-images/${username}/${d3.format('02d')(d)}.jpg`,
    attribution: ''
  }))

  return { zines, zine, images };
}