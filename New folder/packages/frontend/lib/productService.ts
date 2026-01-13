import { amplienceClient } from "./amplienceClient";

export async function fetchProductById(contentId:string) {
    try{
        const response = await amplienceClient.getContentItemById(contentId);
        return response;
    }
    catch (error){
        console.error('Amplience fetch error', error);
        throw error;
    }
}
export async function fetchProductByKey(deliveryKey:string) {
    debugger;
    try{
        const response = await amplienceClient.getContentItemByKey(deliveryKey);
        return response;
    }
    catch (error){
        console.error('Amplience fetch error', error);
        throw error;
    }
}
// export async function fetchProductBySlug(slug:string) {
//     try{
//         const response = await amplienceClient.getContentItems({
//             filterby: {filter:`slug:"${slug}"`}, page:{size:1}
//         });
//         return response.items?.[0]||null;
//     }
//     catch (error){
//         console.error('Amplience fetch error', error);
//         throw error;
//     }
// }
