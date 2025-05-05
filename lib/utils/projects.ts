import axios from "axios";
import {useSupabase} from "@/lib/hooks/supabase";
import {supabase} from "@/lib/utils/supabase/createBrowserClient";

const bucketUrlBase = process.env.NEXT_PUBLIC_SUPABASE_S3_BUCKET_URL;
const accessId = process.env.NEXT_PUBLIC_SUPABASE_S3_ACCESS_ID;
const accessKey = process.env.NEXT_PUBLIC_SUPABASE_S3_ACCESS_KEY;

export const fetchImages = async (bucketDir: string) => {
    if (!bucketUrlBase || !accessId || !accessKey) {
        console.error("Missing environment variables for Supabase S3");
        return;
    }

    const bucketUrl = `${bucketUrlBase}/${bucketDir}`;

    try {
        console.log(`Bucket: ${bucketUrl}`);
            const res = await axios(
            `${bucketUrl}`,
            {
                headers: {
                    "Authorization": `Bearer ${accessId}:${accessKey}`,
                },
            }
        );
        if (!(res.status === 200)) {
            console.error("Failed to fetch project images");
        }
        return await res.data;
    } catch (error) {
        console.error("Error fetching images:", error);
    }
};


export const getImageUrl = (bucketDir: string, imageName: string) => {
    const { data } = supabase.storage.from('project-assets').getPublicUrl(`${bucketDir}/${imageName}`);
    return data.publicUrl || "";
}