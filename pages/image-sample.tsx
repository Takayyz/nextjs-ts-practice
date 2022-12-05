import { NextPage } from 'next';
import Image from 'next/image';

import TestImage from '../public/images/test.jpg';

const ImageSample: NextPage<void> = (props) => {
  return (
    <div>
      <h1>画像表示の比較</h1>
      <p>imgタグで表示した場合</p>
      <img src="/images/test.jpg" />
      <p>Imageコンポーネントで表示した場合</p>
      <Image src={TestImage} alt="test" />
      <p>Imageコンポーネントで表示した場合は事前に描画エリアが確保される</p>
    </div>
  );
};

export default ImageSample;
