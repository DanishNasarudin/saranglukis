"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  fetchInsta,
  fetchUpdatedPostData,
} from "../(serverActions)/fetchInsta";

type Props = {};

type InstagramPost = {
  id: string;
  caption: string;
  media_url: string;
  timestamp: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  permalink: string;
};

const InstaFeed = (props: Props) => {
  const [instaposts, setInstaposts] = useState<InstagramPost[]>([]);
  // const [update, setUpdate] = useState(false);
  // console.log(instaposts, "check");

  useEffect(() => {
    fetchInsta().then((posts) => {
      setInstaposts(posts);
    });
  }, []);

  // Function to handle the error and fetch new data
  async function handleImageError(
    event: React.SyntheticEvent<HTMLImageElement>,
    postId: string
  ) {
    const target = event.target as HTMLImageElement;

    // Fetch the latest data for the post
    const updatedPost = await fetchUpdatedPostData(postId);

    // Replace the image URL with the new one
    if (updatedPost && updatedPost.media_url) {
      target.src = updatedPost.media_url;
    }
  }

  return (
    <div className="max-w-none sm:max-w-[1060px] mx-auto w-full">
      <div
        className="
  w-full sm:w-4/5 mx-auto px-4 sm:px-0 py-10 sm:py-16
  flex flex-col gap-8
  "
        id="explore"
      >
        <div className="max-w-[500px] w-full mx-auto text-center">
          <h2>This could be you.</h2>
          <p>
            These results may vary from first-timers to our regular students.
            You can paint the same way! Learn by doing it directly on the
            canvas.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 w-full mx-auto gap-2">
          {instaposts &&
            instaposts.map((image, index) => {
              return (
                <div key={index} className="hidden sm:block">
                  <a href={image.permalink} target="_blank">
                    <Image
                      src={image.media_url}
                      alt={image.media_type}
                      width={500}
                      height={500}
                      className="object-cover aspect-square rounded-md"
                      onError={(e) => handleImageError(e, image.id)}
                    />
                  </a>
                </div>
              );
            })}
          {instaposts &&
            instaposts.slice(0, 6).map((image, index) => {
              return (
                <div key={index} className="block sm:hidden">
                  <a href={image.permalink} target="_blank">
                    <Image
                      src={image.media_url}
                      alt={image.media_type}
                      width={500}
                      height={500}
                      className="object-cover aspect-square rounded-md"
                      onError={(e) => handleImageError(e, image.id)}
                    />
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default InstaFeed;
