"use server";

type InstagramPost = {
  id: string;
  caption: string;
  media_url: string;
  timestamp: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  permalink: string;
};

type InstagramApiResponse = {
  data: InstagramPost[];
  paging: {
    next?: string;
  };
};

async function fetchInsta() {
  try {
    let imagePosts: InstagramPost[] = [];
    let nextUrl:
      | string
      | null = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;

    let requestCount = 0;
    const maxRequests = 10; // Set a limit to the number of requests

    while (imagePosts.length < 9 && nextUrl && requestCount < maxRequests) {
      const response = await fetch(nextUrl, { cache: "no-store" });
      const data: InstagramApiResponse = await response.json();

      // Filter the posts to include only those with media_type as 'IMAGE'
      const newImagePosts = data.data.filter(
        (post: InstagramPost) =>
          post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM"
      );
      imagePosts = imagePosts.concat(newImagePosts);

      // Check if we have a next page URL
      nextUrl = data.paging.next || null;

      requestCount++; // Increment the request count
    }

    // Return only the first 9 image posts
    return imagePosts.slice(0, 9);
  } catch (error) {
    console.error("Error fetching updated post data:", error);
    return [];
  }
}

async function fetchUpdatedPostData(postId: string) {
  try {
    // Instagram API endpoint to fetch a specific post
    const url = `https://graph.instagram.com/${postId}?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const updatedPost = await response.json();
    return updatedPost;
  } catch (error) {
    console.error("Error fetching updated post data:", error);
    return null;
  }
}

export { fetchInsta, fetchUpdatedPostData };
