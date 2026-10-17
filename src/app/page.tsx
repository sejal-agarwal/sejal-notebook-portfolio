import { getAllPosts, toMeta } from "@/lib/posts";
import Home from "./home";

export default function Page() {
  const recentPosts = getAllPosts().slice(0, 3).map(toMeta);
  return <Home posts={recentPosts} />;
}
