

export default function Head({title, description, image, url}) {
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="Drako" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {image && <meta property="og:image" content={image} />}
            {image && <meta property="og:image:secure_url" content={image} />}
            {image && <meta property="og:image:alt" content={title} />}
            {image && <meta property="og:image:type" content="image/png" />}
            {image && <meta property="og:image:width" content="1200" />}
            {image && <meta property="og:image:height" content="630" />}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@drako9159" />
            <meta name="twitter:creator" content="@drako9159" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}
        </>
    )

}