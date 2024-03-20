import { useEffect } from "react";
import { useState } from "react";
import Quote from "./Quote";
import { Badge } from "@/components/ui/badge";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [tags, setTags] = useState(["tag1", "tag2", "tag3", "tag4"]);
  // const[selectedTag,]

  async function getQuotes() {
    const request = await fetch("/quotes.json");
    const podatki = await request.json();

    setQuotes(podatki);
  }

  function isQuoteSelected(quote) {
    if (selectedTag === null) {
      return true;
    }
    return quote.tags.includes(selectedTag);
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
      <div className="p-4">
        <div>
          {tags.map((tag) => (
            <Badge
              className="cursor-pointer"
              key={tag}
              variant={selectedTag == tag ? "outline" : "default"}
              // {
              //   if (selectedTag == tag) {
              //     return "outline"
              //   } else {
              //     return "default"
              //   }
              // }
              onClick={() => {
                if (tag === selectedTag) {
                  setSelectedTag(null);
                } else {
                  setSelectedTag(tag);
                }
              }}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {quotes
          .filter((q) => isQuoteSelected(q))
          .map((quote) => (
            <Quote quote={quote}></Quote>
          ))}
      </div>
    </>
  );
}
//I surely couldn`t have won the war without the 2009 dodger challenger George Washington
