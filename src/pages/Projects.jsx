import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  const song1 = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3KNxpab0lnSGv4x1Ry9qJb?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
  const song2 = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0qOnSQQF0yzuPWsXrQ9paz?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
  const song3 = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0HPD5WQqrq7wPWR7P7Dw1i?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
  const song4 = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5ReRX3klPvCNYtm6Bd1C1K?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
  const song5 = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/12qZHAeOyTf93YAWvGDTat?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
  const song6 = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1qCdYQdkWvm4cYXAuOlbyc?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
  const song7 = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/32OlwWuMpZ6b0aN2RZOeMS?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
  const song8 = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3xrn9i8zhNZsTtcoWgQEAd?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
  
  
  return (
    <section className="max-container">
      <h1 className="head-text">
        Cheer{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Up!!
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        Get yourself together because universe is not working fine and check few songs i got from my compendium.
      </p>

      
      <div dangerouslySetInnerHTML={{ __html: song1 }} /><br/>
      <div dangerouslySetInnerHTML={{ __html: song2 }} /> <br/>
      <div dangerouslySetInnerHTML={{ __html: song3 }} /><br/>
      <div dangerouslySetInnerHTML={{ __html: song4 }} /><br/>
      <div dangerouslySetInnerHTML={{ __html: song5 }} /><br/>
      <div dangerouslySetInnerHTML={{ __html: song6 }} /><br/>
      <div dangerouslySetInnerHTML={{ __html: song7 }} /><br/>
      <div dangerouslySetInnerHTML={{ __html: song8 }} /><br/>
    </section>
  );
};

export default Projects;
