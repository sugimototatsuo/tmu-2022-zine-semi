import * as d3 from "d3";

export async function load({ params }) {
  const username = params.username;
  const page = params.page;
  const uri = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZ9b1A3fT0h_78kcIRpKUMotr2n7xJLamveN0O1usl28dO94DuLZnORVvz4K9eI9KKUYki0aHJnWjL/pub?gid=700951681&single=true&output=tsv";
  const zines = (await d3.tsv(uri, d3.autoType))
    .slice(1)
    .filter(d => d.visibility === '全体公開')
    .filter(d => d.imgs > 0)

  const zine = zines.find(d => d.username === username);

  if (zine.imgs == 0) {
    return { zines, zine, username, images: [], currentPage: page, pages:[] };
  }

  const images = d3.range(1, zine.imgs).map((d,i) => ({
    id: i,
    name: `Page ${d}`,
    imgurl: `/zine-images/${username}/${d3.format('02d')(d)}.jpg`,
    attribution: ''
  }));

  const pages = d3.range(1, zine.imgs + 1).map((d,i) => ({
    name: `${d}`,
    href: `/zine/${username}/${d}`,
    active: d == page
  }));

  return { zines, zine, username, images: [], currentPage: page, pages };
}