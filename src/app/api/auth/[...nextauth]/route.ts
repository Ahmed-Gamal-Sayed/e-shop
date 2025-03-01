import NextAuth from "next-auth";


const handle = NextAuth({});

export { handle as GET, handle as POST };
