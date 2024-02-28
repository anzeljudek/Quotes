import { useEffect } from "react";
import { useState } from "react";
import Quote from "./Quote";
import { Badge } from "@/components/ui/badge";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [tags, setTags] = useState(["tag1", "tag2", "tag3", "tag4"]);

  async function getQuotes() {
    const request = await fetch("/quotes.json");
    const podatki = await request.json();

    setQuotes(podatki);
  }

  useEffect(() => {
    getQuotes();
  }, []);

  useEffect(() => {
    console.log(quotes);
  }, [quotes]);

  return (
    <>
      <Badge variant="outline">Badge</Badge>

      <div className="grid grid-cols-4 gap-4">
        {quotes.map((quote) => (
          <Quote quote={quote}></Quote>
        ))}
      </div>
    </>
  );
}
