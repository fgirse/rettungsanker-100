import Image from "next/legacy/image";
import {Cloudinary} from "@cloudinary/url-gen";
import { cartoonify } from "@cloudinary/url-gen/actions/effect";
// Import required actions.

import {byAngle} from "@cloudinary/url-gen/actions/rotate"

// Import the required actions and qualifiers.
import {fill} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";

// Import required values.
// Create and configure your Cloudinary instance.

export default function HeroImage() {
const cld = new Cloudinary({
  cloud: {
    cloudName: 'Carlo2024'
  }
});



// Use the image with public ID, 'sample'.
const myImage = cld.image('jsocmhvmbfsnogzmxiyl',);


// Transform the image.
myImage

.resize(fill(200,200))
.effect(cartoonify(20))

.roundCorners(byRadius(10))

  .rotate(byAngle(0))
  .format('png');


  // Return the delivery URL
  const myUrl = myImage.toURL()
  return(


    <div className="flex flex-col items-center">

      <Image src={myUrl} width={200} height={200} alt="Transformed Image" className="text-white text-left" />
    </div>


  );
}