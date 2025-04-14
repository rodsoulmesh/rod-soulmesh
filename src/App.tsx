import { useState } from "react";

type Language = "en" | "pl" | "ru" | "es";

export default function App() {
  const [posts, setPosts] = useState<{ id: number; content: string }[]>([]);
  const [newPost, setNewPost] = useState("");
  const [lang, setLang] = useState<Language>("en");

  const translations: Record<Language, any> = {
    en: {
      title: "Rod-SoulMesh",
      subtitle: "A spiritual portal for consciousness, ceremonies, and the power of our talents.",
      placeholder: "Share your thoughts, vision, experience...",
      button: "Post",
      footer: "© 2025 Rod-SoulMesh.net – United through spirit and nature ✨",
    },
    pl: {
      title: "Rod-SoulMesh",
      subtitle: "Portal duchowości, połączenia, witchcraftu i słow
