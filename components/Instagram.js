import { useState, useEffect } from "react";

const url = "https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url&&access_token=";
const token = "";
const imagesToFetch = 6;

export default function InstagramFeed() {

    const [igImages, setIgImages] = useState();

    useEffect(() => {
        async function getIgImages() {
            try {
                const res = await fetch(`${url}${token}`);
                const data = await res.json();
                setIgImages(data.data.slice(0, 6));
            } catch(err) {
                console.log(err, 'error loading instagram')
            }
        }
        getIgImages();
    }, []);

    

    return (
        <div class="socialFeed">
            {igImages && igImages.map((image) => {
                return (
                    <a className="image" href={image.permalink}>
                        <img src={image.media_url} alt="Follow us on Instagram" />
                    </a>
                )
            })}
        </div>
    )
}