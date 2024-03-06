import { useEffect } from "react";
import { useState } from "react";
import Quote from "./Quote";
import { Badge } from "@/components/ui/badge";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [tags, setTags] = useState(["tag1", "tag2", "tag3", "tag4"]);
  const[selectedTag,]

  async function getQuotes() {
    const request = await fetch("/quotes.json");
    const podatki = await request.json();

    setQuotes(podatki);
  }

  function sestej(stevilo1, stevilo2) {
    return stevilo1 + stevilo2;
  }

  useEffect(() => {
    getQuotes();
  }, []);

  useEffect(() => {
    // console.log(quotes);

    if (!(quotes && quotes.length > 0)) {
      return;
    }

    let tags = [];

    quotes.forEach((e) => {
      const quote_tags = e["tags"];
      quote_tags.forEach((tag) => {
        console.log(tag);
        //if (tags.includes(tag)) {
        // console.log("je ze dodan na seznam");
        //} else {
        //  tags.push(tag);
        // }

        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      });
    });

    // quotes.forEach((e) => {
    //   console.log(e["tags"]);
    //   tags = tags.concat(e["tags"]);

    // });
    setTags(tags);
  }, [quotes]);

  return (
    <>
      {tags.map((tag) => (
        <Badge variant="outline">{tag}</Badge>
      ))}

      <div className="grid grid-cols-5 gap-4">
        {quotes.map((quote) => (
          <Quote quote={quote}></Quote>
        ))}
      </div>
    </>
  );
}
//I surely couldn`t have won the war without the 2009 dodger challenger George Washington
