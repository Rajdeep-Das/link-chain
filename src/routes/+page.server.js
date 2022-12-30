import db from "$lib/server/db"

export async function load() {
  const links = await db.collection('users-links').find().toArray();
  links.forEach((link) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      link._id = link._id.toString();
  });
  //console.log("Response from MongoDb: ",links);
  return {
    linkData: links
  };
}