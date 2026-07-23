import { connection } from "next/server"; 
import { CatImage } from "./cat-image";
import { fetchImage } from "./fetch-image"; 
import { LikeButton } from "./like-button";
 
export default async function Home() {
  //           ^^^^^(1) asyncキーワードを追加
  // (2) ビルド時にfetchImageの結果が固定されないようにする
  await connection();
  // (3) APIから画像を取得
  const image = await fetchImage();
  // (4) 画像URLをコンソールに表示
  console.log(image.url);
  
  return (
    <div>
      <CatImage url={image.url} />
      <LikeButton />
    </div>
  );
}