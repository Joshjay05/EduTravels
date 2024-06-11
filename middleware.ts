// //  import {NextResponse, type NextRequest } from "next/server";
// //  export function  middleware(req: NextResponse){
// //     console.log(req.nextUrl);
// //     const res =NextResponse.next();
// //     res.headers.append("ACCESS-CONTROL-ALLOW-ORIGIN",'*');
// // return res
// //  }
// //  export const config ={
// //     matcher:['/api/:path*'],
// //  }
// const allowCors = (fn: { (req: any, res: any): void; (arg0: { method: string; }, arg1: { setHeader: (arg0: string, arg1: string | boolean) => void; status: (arg0: number) => { (): any; new(): any; end: { (): void; new(): any; }; }; }): any; }) => async (req: { method: string }, res: { setHeader: (arg0: string, arg1: string | boolean) => void; status: (arg0: number) => { (): any; new(): any; end: { (): void; new(): any } } }) => {
//     res.setHeader('Access-Control-Allow-Credentials', true)
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     // another common pattern
//     // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
//     res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
//     res.setHeader(
//       'Access-Control-Allow-Headers',
//       'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
//     )
//     if (req.method === 'OPTIONS') {
//       res.status(200).end()
//       return
//     }
//     return await fn(req, res)
//   }
  
//   const handler = (req, res) => {
//     const d = new Date()
//     res.end(d.toString())
//   }
  
//   module.exports = allowCors(handler)
  