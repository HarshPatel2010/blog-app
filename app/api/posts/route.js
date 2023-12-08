import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "../auth/[...nextauth]/route";

export const GET = async(req)=>{
    const {searchParams} = new URL(req.url);
    const page = searchParams.get("page");
    const POST_PER_PAGE = 2;

    const query = {
        take:POST_PER_PAGE,
        skip:POST_PER_PAGE*(page-1)
    }

    try {
        const [posts,count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count()
        ])
        
        return new NextResponse(JSON.stringify({posts,count},{status:200}))
    } catch (error) {
        return new NextResponse(JSON.stringify({message:"something went wrong in findding post"},{status:500}))
    }
}




// create post
export const POST = async(req)=>{
    const session =await getAuthSession();
    if(!session){
        return new NextResponse({message:"Not Authenticated"},{status:401});
    }

  
    try {
        const body = await req.json();
        const comment = await prisma.post.create({
            data:{...body, userEmail: session.user.email}
        })
        return new NextResponse(JSON.stringify(comment,{status:200}))
    } catch (error) {
        return new NextResponse(JSON.stringify({message:"something went wrong in findding post"},{status:500}));
    }
}



