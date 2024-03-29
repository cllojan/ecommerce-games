import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:'z8jt0ue2',
    dataset:'production',
    apiVersion:'2023-01-07',
    useCDN:true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source)
