import { MetadataRoute } from 'next'
import directus from "../lib/directus"
import { createDirectus, rest, readItems } from '@directus/sdk';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {


  

  const baseURL = process.env.NEXT_PUBLIC_SITE_URL as string

  // Get Posts


  const posts = await directus.request(
    readItems('post', {

      fields: [
        "slug",
        "date_updated",
    ],
    })

  )  

 

  const postLinks = posts?.map((post:any) => {
      return[
          {
               url: `${baseURL}/en/post/${post.slug}`,
               lastModified: new Date(post.date_updated)
          },
          {
               url: `${baseURL}/es/post/${post.slug}`,
               lastModified: new Date(post.date_updated)
          },
          //In the base fix it so Main Site is Base!
          {
               url: `${baseURL}/post/${post.slug}`,
               lastModified: new Date(post.date_updated) 
          },
         
      ]
    
         
  })

  // Get Categories


  const categories = await directus.request(
    readItems('category', {

      fields: [
        "slug",
        "date_updated",
    ],
    })

  )  



  const  categoriesTranslations = await directus.request(
    readItems("category_translations", {

      fields: [
        "slug",
        "date_updated",
    ],
    })

  )  


 

  console.log(categoriesTranslations)

  const categoryLinks = categories?.map((category:any) => {
    return[
        {
             url: `${baseURL}/en/${category.slug}`,
             lastModified: new Date()
        },
        {
             url: `${baseURL}/es/${category.slug}`,
             lastModified: new Date()
        },
        //In the base fix it so Main Site is Base!
        {
             url: `${baseURL}/${category.slug}`,
             lastModified: new Date() 
        },
   
    ]
   
       
})   

 //Brings ins postLinks attaches it to categoryLinks and then [puts them in same array ] ?
  const dynamicLinks = postLinks?.concat(categoryLinks ?? []).flat() ?? [];


  return [
    {
      url: baseURL,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/en`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/es`,
      lastModified: new Date(),
    },
    {
        url: `${baseURL}/blog`,
        lastModified: new Date(),
      },
      {
        url: `${baseURL}/en/blog`,
        lastModified: new Date(),
      },
      {
        url: `${baseURL}/es/blog`,
        lastModified: new Date(),
      },
    ...dynamicLinks
  ]
}