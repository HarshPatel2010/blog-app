import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "../auth/[...nextauth]/route";

export const GET = async(req)=>{
    const {searchParams} = new URL(req.url);
    const postSlug = searchParams.get("pageSlug");
  
    try {
       const comments = await prisma.comment.findMany({
        where:{
            ...(postSlug && {postSlug}),
        },
        include:{user:true},
       })
        return new NextResponse(JSON.stringify(comments,{status:200}))
    } catch (error) {
        return new NextResponse(JSON.stringify({message:"something went wrong in findding post"},{status:500}))
    }
}


// create comment
export const POST = async(req)=>{
    const session =await getAuthSession();
    if(!session){
        return new NextResponse({message:"NOt Authenticated"},{status:401});
    }

  
    try {
        const body = await req.json();
        const comment = await prisma.comment.create({
            data:{...body, userEmail: session.user.email}
        })
        return new NextResponse(JSON.stringify(comment,{status:200}))
    } catch (error) {
        return new NextResponse(JSON.stringify({message:"something went wrong in findding post"},{status:500}));
    }
}

