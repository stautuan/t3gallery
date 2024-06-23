import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/e00a4be6-1b1e-4292-a6c0-546ccb8537ce-vmbc5d.jpg",
  "https://utfs.io/f/bd7a7029-a0b4-4861-afe0-ba86c4bdab33-vmbc5e.jpg",
  "https://utfs.io/f/457ddbfe-fd80-4cba-80d6-7e4e0caa9197-vmbc5b.jpg",
  "https://utfs.io/f/38fba3cb-a0a2-441c-85c4-43c79fa91d76-mm7j7s.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
